class Message:

    def __init__(self, entity_name):
        self.entity_name = entity_name

    def created(self):
        text = self.entity_name + " successfully created !"
        return {"message": text}

    def updated(self):
        text = self.entity_name + " successfully updated !"
        return {"message": text}

    def deleted(self):
        text = self.entity_name + " successfully deleted !"
        return {"message": text}