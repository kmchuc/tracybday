from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Messages(db.Model):
    """users can leave a message using the form"""

    __tablename__ = 'messages'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    message = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<message={self.content}>"