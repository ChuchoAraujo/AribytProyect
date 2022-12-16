from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Tabla_clasificadora(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_tabla = db.Column(db.Integer, primary_key=True)
    horas = db.Column(db.Integer, unique=False, nullable=True)
    fecha = db.Column(db.String, unique=False, nullable=True)
    cajas = db.Column(db.String, unique=False, nullable=True)
    articulo = db.Column(db.String, unique=True, nullable=True)
    lote = db.Column(db.String, unique=True, nullable=False)
    jaulas = db.Column(db.String, unique=True, nullable=False)
    pedido = db.Column(db.String, unique=True, nullable=False)
    personal = db.Column(db.String, unique=False, nullable=False)
    problema = db.Column(db.String, unique=False, nullable=False)
    accion = db.Column(db.String, unique=False, nullable=False)
    tiempo = db.Column(db.Float, unique=False, nullable=False)
    velocidad = db.Column(db.Float, unique=False, nullable=True)
    gramos = db.Column(db.Float, unique=False, nullable=True)

    def __repr__(self):
        return f'<Tabla_clasificadora {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_tabla": self.id_tabla,
            "cajas": self.cajas,
            "articulo": self.articulo,
            "lote": self.lote,
            "jaulas": self.jaulas,
            "pedido": self.pedido,
            "personal": self.personal,
            "problema": self.problema,
            "accion": self.accion,
            "tiempo": self.tiempo,
            "velocidad": self.velocidad,
            "gramos": self.gramos,
        }
