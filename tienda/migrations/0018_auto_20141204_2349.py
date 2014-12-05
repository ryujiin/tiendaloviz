# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0017_auto_20141204_1812'),
    ]

    operations = [
        migrations.CreateModel(
            name='TemplatePagina',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=120)),
                ('nombre_interno', models.CharField(max_length=120, unique=True, null=True, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RenameField(
            model_name='menu',
            old_name='nombre',
            new_name='css',
        ),
        migrations.RemoveField(
            model_name='pagina',
            name='menu',
        ),
        migrations.RemoveField(
            model_name='seccionespagina',
            name='parte',
        ),
        migrations.AddField(
            model_name='menu',
            name='nombre_interno',
            field=models.CharField(default='prueba', unique=True, max_length=120),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menu',
            name='pagina',
            field=models.ForeignKey(related_name='menus', blank=True, to='tienda.Pagina', null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='menu',
            name='template',
            field=models.ForeignKey(blank=True, to='tienda.TemplatePagina', null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='menu',
            name='titulo',
            field=models.CharField(max_length=120, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='pagina',
            name='template',
            field=models.ForeignKey(blank=True, to='tienda.TemplatePagina', null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='seccionespagina',
            name='nombre_interno',
            field=models.CharField(max_length=120, unique=True, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bloque',
            name='template',
            field=models.ForeignKey(blank=True, to='tienda.TemplatePagina', null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='carrusel',
            name='template',
            field=models.ForeignKey(blank=True, to='tienda.TemplatePagina', null=True),
            preserve_default=True,
        ),
    ]
