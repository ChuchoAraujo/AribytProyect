'''
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
'''
from flask import Flask, request, jsonify, url_for, Blueprint,Response,json
from api.models import db, User, TablaClasificadora, TablaMecanico
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import CORS, cross_origin

api = Blueprint('api', __name__)

CORS(api)

#-------------------------------------------------- USERS --------------------------------------------------------------------------------------#


@api.route('/users', methods=['GET'])
def get_users():
    call_users = User.query.all()
    result = [element.serialize() for element in call_users]
    response_body = {'msg': 'Get create successfully!'}
    return jsonify(result), 200

#---------------------------------------- LOGIN ----------------------------------------#

@api.route('/acceso', methods=['POST'])
def login():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    role = request.json.get('role', None)
    turno = request.json.get('turno', None)

    user = User.query.filter_by(email=email).filter_by(password=password).filter_by(role=role).first()
  
    if user == None:
        return jsonify({'msg': 'User, password or role Not exist!'}), 401
    
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token,"user":user.id}), 200 


#---------------------------------------- REGISTER ----------------------------------------#  
@api.route('/register', methods=['POST'])
def register():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    role = request.json.get('role', None)
    turno = request.json.get('turno', None)

    user_already_exist = User.query.filter_by(username=username).filter_by(email=email).filter_by(password=password).first()

    if user_already_exist:
        return jsonify({'msg': 'Mismo email o contraseña'}), 401

    else:
        new_user = User(username=username, email=email, password=password, role=role)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'user': new_user.serialize()}), 200

#---------------------------------------- PRIVATE ----------------------------------------#

@api.route('/private', methods=['GET'])
@jwt_required()
def token_acces():
   current_user_id = get_jwt_identity()
   user = User.query.get(current_user_id)
   
   if user == None:
        return jsonify({'msg': 'User, password or role Not exist!'}), 401
   
   return jsonify({
    'user': user.serialize(),
    'current_user' : current_user_id
   }), 200



#-------------------------------------------------- TABLA CLASIFICADORA --------------------------------------------------------------------------------------#

@api.route('/clasificadora', methods=['GET'])
def get_clasificadora():
    call_clasificadora = TablaClasificadora.query.all()
    result = [element.serialize() for element in call_clasificadora]
    response_body = {'msg': 'Get clasificadora OK'}
    return jsonify(result), 200


@api.route('/clasificadora', methods=['POST'])
@cross_origin()
@jwt_required()
def clasificadora():

    user_id = request.json.get('user_id', None)
    cajas = request.json.get('cajas', None)
    articulo = request.json.get('articulo', None)
    lote = request.json.get('lote', None)
    jaulas = request.json.get('jaulas', None)
    pedido = request.json.get('pedido', None)
    personal = request.json.get('personal', None)
    problema = request.json.get('problema', None)
    accion = request.json.get('accion', None)
    tiempo = request.json.get('tiempo', None)
    velocidad = request.json.get('velocidad', None)
    gramos = request.json.get('gramos', None)
    fecha = request.json.get('fecha', None)
    horas = request.json.get('horas', None)
    turno = request.json.get('turno',None)

    user_id = user_id = get_jwt_identity()

    try:
        newRegister = TablaClasificadora(
        user_id=user_id,
        cajas=cajas, 
        articulo=articulo,
        lote=lote, 
        jaulas=jaulas, 
        pedido=pedido, 
        personal=personal, 
        problema=problema, 
        accion=accion,
        tiempo=tiempo, 
        velocidad=velocidad, 
        gramos=gramos, 
        fecha=fecha, 
        horas=horas,
        turno=turno)

        db.session.add(newRegister)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402


    return jsonify({
        'register': newRegister.serialize(),
        'identity': get_jwt_identity()
    }), 201


#---------------------------------------- TABLA MECANICO ----------------------------------------#

@api.route('/mecanico', methods=['GET'])
def get_mecanico():
    call_get_mecanico = TablaMecanico.query.all()
    result = [element.serialize() for element in call_get_mecanico]
    response_body = {'msg': 'Get mecanico OK'}
    return jsonify(result), 200


@api.route('/mecanico', methods=['POST'])
@cross_origin()
@jwt_required()
def mecanico():

    user_id = request.json.get('user_id', None)
    problema = request.json.get('problema', None)
    accion = request.json.get('accion', None)
    fecha = request.json.get('fecha', None)
    horas = request.json.get('horas', None)
    turno = request.json.get('turno',None)

    user_id = user_id = get_jwt_identity()

    try:
        newRegister = TablaMecanico(
        user_id=user_id,
        fecha=fecha, 
        horas=horas,
        problema=problema, 
        accion=accion,
        turno=turno)

        db.session.add(newRegister)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402


    return jsonify({
        'register': newRegister.serialize(),
        'identity': get_jwt_identity()
    }), 201


#---------------------------------- TABLA ENCARGADO ---------------------------

@api.route('/encargado', methods=['GET'])
def get_encargado():
    call_users = User.query.all()
    result_user = [element.serialize() for element in call_users]
    call_clasificadora = TablaClasificadora.query.all()

    result_clasificadora = [element.serialize() for element in call_clasificadora]
    call_get_mecanico = TablaMecanico.query.all()

    result_Mecanico = [element.serialize() for element in call_get_mecanico]
    response_body = {'msg': 'Gets OKS'}

    return jsonify({
        'user': result_user, 
        'clasificadora': result_clasificadora, 
        'mecanico': result_Mecanico 
        }), 200


def filtro_usuario(valor):
    email=""
    sentencia = db.session.query(User).filter(User.id==valor).all()
    for result in sentencia:
        email=result.email
    return email


@api.route('/join', methods=['POST'])
@cross_origin()
def get_join():
    request_data = request.get_json()
    turno1 = request_data['turno']
    fecha1 = request_data['fecha']
    array=[]
    resultado = db.session.query(User,TablaClasificadora,TablaMecanico). \
        select_from(User).join(TablaClasificadora and TablaMecanico). \
            filter(TablaClasificadora.turno==turno1 and TablaMecanico.turno==turno1 and
                TablaClasificadora.fecha==fecha1 and TablaMecanico.fecha==fecha1).all()

    for usuario,clasificadora,mecanico in resultado:
        array.append({
            'usuarioClasificadora': filtro_usuario(clasificadora.user_id),
            'idclasificadora':clasificadora.user_id,
            'problemaClasificadora':clasificadora.problema,
            'horaClasificadora':clasificadora.horas,
            'cajas':clasificadora.cajas,
            'fecha':clasificadora.fecha,
            'articulo':clasificadora.articulo,
            'lote': clasificadora.lote,
            'jaulas': clasificadora.jaulas,
            'pedido': clasificadora.pedido,
            'personal': clasificadora.personal,
            'accionClasificadora': clasificadora.accion,
            'tiempo': clasificadora.tiempo,
            'velocidad': clasificadora.velocidad,
            'gramos':clasificadora.gramos,

            'usuarioMecanico': filtro_usuario(mecanico.user_id),
            'userMecanico':usuario.username,
            'problemaMecanico':mecanico.problema,
            'accionMecanico':mecanico.accion,
            'horaDelMecanico':mecanico.horas
            })

    return Response(json.dumps(array), mimetype='application/json')

