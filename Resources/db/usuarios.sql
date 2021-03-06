DROP TABLE IF EXISTS "cat_membresia";
CREATE TABLE "cat_membresia" ("id_cat_membresia" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL , "membresia" VARCHAR, "avtivo" INTEGER DEFAULT 1);
INSERT INTO "cat_membresia" VALUES(1,'Dorada',1);
INSERT INTO "cat_membresia" VALUES(2,'Platino',1);
INSERT INTO "cat_membresia" VALUES(3,'Clásica',1);
DROP TABLE IF EXISTS "direccion";
CREATE TABLE "direccion" ("id_direccion" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL , "direccion" VARCHAR);
INSERT INTO "direccion" VALUES(1,'Tlaxcoaque 8, Colonia Centro');
INSERT INTO "direccion" VALUES(2,'Plaza de la constitucón #1 Colonia Centro');
INSERT INTO "direccion" VALUES(3,'Av. del taller 56, Colonia Ortiz Tirado');
INSERT INTO "direccion" VALUES(4,'Eje 6 sur 567, Colonia Sifón');
DROP TABLE IF EXISTS "usuario";
CREATE TABLE "usuario" ("id_usuario" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "nombre" VARCHAR, "ap_paterno" VARCHAR, "edad" INTEGER, "telefono" VARCHAR, "id_cat_membresia" INTEGER, "id_direccion" INTEGER, FOREIGN KEY (id_cat_membresia) REFERENCES cat_membresia(id_cat_membresia) ON DELETE CASCADE, FOREIGN KEY (id_direccion) REFERENCES direccion(id_direccion) ON DELETE CASCADE);
INSERT INTO "usuario" VALUES(1,'Efren','Valdez',35,'123456',2,2);
INSERT INTO "usuario" VALUES(2,'Brandom','Perez',33,'123450',1,1);
INSERT INTO "usuario" VALUES(3,'Alejandro','Hernandez',21,'1234123',3,2);
INSERT INTO "usuario" VALUES(4,'Alejandro','Martinez',18,'1231232',1,3);
INSERT INTO "usuario" VALUES(5,'Michel','Perez',19,'1231266',3,2);
INSERT INTO "usuario" VALUES(6,'Alejandra','Aguilar',23,'333333',2,4);
