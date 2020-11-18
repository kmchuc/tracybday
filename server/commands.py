import click
form flask.cli import with_appcontext

from .model import db, Messages

@click.command(name="create_tables")
@with_appcontext
def create_tables():
    db.create_all()