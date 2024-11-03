create database enrolados;
use enrolados;

create table usuario(
IdUsuario integer primary key auto_increment,
DatadeNascimento date not null,
NomeUsuario varchar(100) not null,
SenhaUsuario varchar(255) not null,
EmailUsuario varchar(50) not null,
IdadeUsuário integer,
ImagemUsuario longblob
);

create table autor(
IdAutor integer primary key auto_increment,
NomeAutor varchar(100) not null,
EmailAutor varchar(50) not null
);

create table artigo(
IdArtigo integer primary key auto_increment,
NomeArtigo varchar(50) not null,
Tipo varchar(50) not null,
DataHoraArtigo timestamp default current_timestamp,
IdAutor integer,
foreign key (IdAutor) references autor(IdAutor)
);


create table feedback_artigo(
IdFeedbackArtigo integer primary key auto_increment,
MensagemArtigo varchar(300) not null,
DataComentarioArt timestamp default current_timestamp,
IdArtigo varchar(255),
ImagemUsuario longblob,
IdUsuario integer,
foreign key (IdUsuario) references usuario(IdUsuario)
);

create table feedback_site(
IdFeedbackSite integer primary key auto_increment,
MensagemSite varchar(500) not null,
DataComentarioSite timestamp default current_timestamp,
IdUsuario integer,
foreign key (IdUsuario) references usuario(IdUsuario)
);

