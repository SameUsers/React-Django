from django.db import models

class Flat(models.Model):
    date=models.DateField(auto_now=True)
    description=models.TextField()
    price=models.DecimalField(max_digits=8,decimal_places=2)

    def __str__(self):
        return self.description