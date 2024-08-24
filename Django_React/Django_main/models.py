from django.db import models




class Flat(models.Model):
    date = models.DateField(auto_now=True,)
    description = models.TextField(help_text="Описание")
    short_description=models.CharField(max_length=255,help_text="Краткое описание в карточке товара",default="Short Description")
    price = models.IntegerField(help_text="Цена за сутки")
    name=models.CharField(max_length=255,help_text="Краткое название для отображения")
    members=models.IntegerField(help_text="Количество спальных мест")
    location=models.TextField(help_text="Адресс")
    img=models.TextField(help_text="Ссылка на изображение")

    def __str__(self):
        return self.name
