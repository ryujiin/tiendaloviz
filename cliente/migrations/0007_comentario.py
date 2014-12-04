# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('catalogo', '0011_auto_20141202_1947'),
        ('cliente', '0006_auto_20141108_1545'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('verificado', models.BooleanField(default=False)),
                ('valoracion', models.PositiveIntegerField(default=0)),
                ('comentario', models.TextField()),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('email', models.CharField(max_length=100, null=True, blank=True)),
                ('producto', models.ForeignKey(to='catalogo.Producto')),
                ('usuario', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('variacion', models.ForeignKey(blank=True, to='catalogo.ProductoVariacion', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
