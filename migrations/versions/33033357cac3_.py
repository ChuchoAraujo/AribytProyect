"""empty message

Revision ID: 33033357cac3
Revises: a839c32e9569
Create Date: 2022-12-19 09:34:13.420305

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '33033357cac3'
down_revision = 'a839c32e9569'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tabla_clasificadora',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_tabla', sa.Integer(), nullable=False),
    sa.Column('horas', sa.Integer(), nullable=True),
    sa.Column('fecha', sa.String(), nullable=True),
    sa.Column('cajas', sa.String(), nullable=True),
    sa.Column('articulo', sa.String(), nullable=True),
    sa.Column('lote', sa.String(), nullable=False),
    sa.Column('jaulas', sa.String(), nullable=False),
    sa.Column('pedido', sa.String(), nullable=False),
    sa.Column('personal', sa.String(), nullable=False),
    sa.Column('problema', sa.String(), nullable=False),
    sa.Column('accion', sa.String(), nullable=False),
    sa.Column('tiempo', sa.Float(), nullable=False),
    sa.Column('velocidad', sa.Float(), nullable=True),
    sa.Column('gramos', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id', 'id_tabla'),
    sa.UniqueConstraint('articulo'),
    sa.UniqueConstraint('jaulas'),
    sa.UniqueConstraint('lote'),
    sa.UniqueConstraint('pedido')
    )
    op.create_table('tabla_mecanico',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_tabla', sa.Integer(), nullable=False),
    sa.Column('problema', sa.String(), nullable=True),
    sa.Column('accion', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', 'id_tabla'),
    sa.UniqueConstraint('accion'),
    sa.UniqueConstraint('problema')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('role', sa.String(), nullable=True))
        batch_op.create_unique_constraint(None, ['role'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('role')

    op.drop_table('tabla_mecanico')
    op.drop_table('tabla_clasificadora')
    # ### end Alembic commands ###