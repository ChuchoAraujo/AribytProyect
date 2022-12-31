'''
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
'''
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, TablaClasificadora, TestTable
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import CORS, cross_origin

api = Blueprint('api', __name__)

CORS(api)

#-------------------------------------------------- USUARIOS --------------------------------------------------------------------------------------#

#---------------------------------------- GET / USERS ----------------------------------------#

@api.route('/users', methods=['GET'])
def get_users():
    call_users = User.query.all()
    result = [element.serialize() for element in call_users]
    response_body = {'msg': 'Get create successfully!'}
    return jsonify(result), 200

#---------------------------------------- POST / LOGIN ----------------------------------------#

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



# @api.route('/acceso', methods=['POST'])
# def login():
#     email = request.json.get('email', None)
#     password = request.json.get('password', None)
#     role = request.json.get('role', None)

#     user = User.query.filter_by(email=email,password=password, role=role).first()
  
#     if user == None:
#         return jsonify({'msg': 'User, password or role Not exist!'}), 401
    
#     access_token = create_access_token(identity=user.email)

#     response_body = {
#         'msg': 'Token create',
#         'token': access_token
#     }

#     return jsonify(response_body), 200 

#---------------------------------------- POST / REGISTER ----------------------------------------#  
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

#---------------------------------------- GET / PRIVATE ----------------------------------------#

@api.route('/private', methods=['GET'])
@jwt_required()
def token_acces():
   current_user_id = get_jwt_identity()
   user = User.query.get(current_user_id)
   
   return jsonify(user.serialize()), 200



# @api.route('/private', methods=['GET'])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     response_body= {
#         'msg': 'permission granted',
#         'done': True,
#         'user': get_jwt_identity()
#     }
#     return jsonify(response_body), 200


#-------------------------------------------------- ROLES --------------------------------------------------------------------------------------#

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
        'user': newRegister.serialize(),
        'identity': get_jwt_identity()
    }), 201


# @api.route('/clasificadora', methods=['POST'])
# @cross_origin()
# @jwt_required()
# def clasificadora():
    
#     request_data = request.get_json(force=True)
    
#     try:
#         registro = TablaClasificadora( 
#         # user_id = request_data[get_jwt_identity()],
#         cajas = request_data['cajas'], 
#         articulo = request_data['articulo'], 
#         lote = request_data['lote'],
#         jaulas = request_data['jaulas'],
#         pedido = request_data['pedido'],
#         personal = request_data['personal'],
#         problema = request_data['problema'],
#         accion = request_data['accion'],
#         tiempo = request_data['tiempo'],
#         velocidad = request_data['velocidad'],
#         gramos = request_data['gramos'],
#         fecha = request_data['fecha'],
#         horas = request_data['horas']
#         )

#         db.session.add(registro)
#         db.session.commit()

#     except Exception as e:
#         return jsonify({"error": str(e)}), 402

#     response_body = {
#         "msg": "User create",
#         "user": get_jwt_identity()
#         }
#     return jsonify(response_body), 201

  
#     # return jsonify({
#     #     'msg': 'ok',
#     #     'registro': registro.serialize()
#     #     }), 201





@api.route('/test', methods=['POST'])
def handle_test():

    request_data = request.get_json(force=True)

    new_test = TestTable (
        name=request_data['name']
    )

    db.session.add(new_test)
    db.session.commit()

    return jsonify({"msg":"ok", "test": new_test.serialize()})