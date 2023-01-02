'''
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
'''
from flask import Flask, request, jsonify, url_for, Blueprint
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
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    role = request.json.get('role', None)

    user = User.query.filter_by(email=email).filter_by(password=password).filter_by(role=role).first()
  
    if user == None:
        return jsonify({'msg': 'User, password or role Not exist!'}), 401
    
    if user:
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token,"user":user.id}), 200 


#---------------------------------------- REGISTER ----------------------------------------#  
@api.route('/register', methods=['POST'])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    role = request.json.get('role', None)

    user_already_exist = User.query.filter_by(email=email).filter_by(password=password).first()

    if user_already_exist:
        return jsonify({'msg': 'Mismo email o contraseña'}), 401

    else:
        new_user = User(email=email, password=password, role=role)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'user': new_user.serialize()}), 200

#---------------------------------------- PRIVATE ----------------------------------------#

@api.route('/private', methods=['GET'])
@jwt_required()
def token_acces():
   current_user_id = get_jwt_identity()
   user = User.query.get(current_user_id)
   
   return jsonify(user.serialize()), 200



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
        horas=horas,)

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

    user_id = user_id = get_jwt_identity()

    try:
        newRegister = TablaMecanico(
        user_id=user_id,
        fecha=fecha, 
        horas=horas,
        problema=problema, 
        accion=accion)

        db.session.add(newRegister)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402


    return jsonify({
        'register': newRegister.serialize(),
        'identity': get_jwt_identity()
    }), 201