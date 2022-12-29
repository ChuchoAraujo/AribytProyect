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

    user = User.query.filter_by(email=email,password=password, role=role).first()
  
    if user == None:
        return jsonify({'msg': 'User, password or role Not exist!'}), 401
    
    access_token = create_access_token(identity=user.email)

    response_body = {
        'msg': 'Token create',
        'token': access_token
    }

    return jsonify(response_body), 200 

#---------------------------------------- GET / PRIVATE ----------------------------------------#

@api.route('/private', methods=['GET'])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    response_body= {
        'msg': 'permission granted',
        'done': True,
        'user': get_jwt_identity()
    }
    return jsonify(response_body), 200


#-------------------------------------------------- ROLES --------------------------------------------------------------------------------------#


@api.route('/clasificadora', methods=['POST'])
@cross_origin()
def clasificadora():
    
    request_data = request.get_json(force=True)

    try:
        registro = TablaClasificadora( 
        cajas = request_data['cajas'], 
        articulo = request_data['articulo'], 
        lote = request_data['lote'],
        jaulas = request_data['jaulas'],
        pedido = request_data['pedido'],
        personal = request_data['personal'],
        problema = request_data['problema'],
        accion = request_data['accion'],
        tiempo = request_data['tiempo'],
        velocidad = request_data['velocidad'],
        gramos = request_data['gramos'],
        fecha = request_data['fecha'],
        horas = request_data['horas']
        )

        db.session.add(registro)
        db.session.commit()

    except Exception as e:
        return jsonify({"error": str(e)}), 402

    response_body = {"msg": "register ok"}
    return jsonify(response_body), 201

  
    # return jsonify({
    #     'msg': 'ok',
    #     'registro': registro.serialize()
    #     }), 201





@api.route('/test', methods=['POST'])
def handle_test():

    request_data = request.get_json(force=True)

    new_test = TestTable (
        name=request_data['name']
    )

    db.session.add(new_test)
    db.session.commit()

    return jsonify({"msg":"ok", "test": new_test.serialize()})