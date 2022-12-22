"""empty message

Revision ID: 624f9dded070
Revises: 523f11fde5db
Create Date: 2022-12-22 19:36:44.036034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '624f9dded070'
down_revision = '523f11fde5db'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tabla_clasificadora', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tabla_clasificadora', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
