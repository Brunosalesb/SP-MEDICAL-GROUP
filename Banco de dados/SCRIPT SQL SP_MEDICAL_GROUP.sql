CREATE DATABASE SpMedicalGroup

USE SpMedicalGroup

CREATE TABLE CLINICAS(
	ID INT IDENTITY PRIMARY KEY
	,NOME VARCHAR(250) NOT NULL
	,ENDERECO VARCHAR(250) NOT NULL
	,HORARIO_DE_FUNCIONAMENTO TIME NOT NULL
	,CNPJ CHAR(14) UNIQUE NOT NULL
	,NOME_FANTASIA VARCHAR(255) NOT NULL
	,RAZAO_SOCIAL VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TIPOS_USUARIOS(
	ID INT IDENTITY PRIMARY KEY
	,TIPO VARCHAR(100)
);

CREATE TABLE USUARIOS(
	ID INT IDENTITY PRIMARY KEY
	,EMAIL VARCHAR(255) UNIQUE NOT NULL
	,SENHA VARCHAR(255) NOT NULL
	,ID_TIPO_USUARIO INT FOREIGN KEY REFERENCES TIPOS_USUARIOS(ID)
);

CREATE TABLE ESPECIALIDADES(
	ID INT IDENTITY PRIMARY KEY
	,ESPECIALIDADE VARCHAR(255)
);

CREATE TABLE MEDICOS(
	ID INT IDENTITY PRIMARY KEY
	,CRM CHAR(5) UNIQUE NOT NULL
	,ID_USUARIO INT FOREIGN KEY REFERENCES USUARIOS(ID)
	,ID_ESPECIALIDADE INT FOREIGN KEY REFERENCES ESPECIALIDADES(ID)
	,ID_CLINICA INT FOREIGN KEY REFERENCES CLINICAS(ID)
);

CREATE TABLE PRONTUARIOS(
	ID INT IDENTITY PRIMARY KEY
	,NOME VARCHAR(255)
	,ID_USUARIO INT FOREIGN KEY REFERENCES USUARIOS(ID)
	,DATA_DE_NASCIMENTO DATETIME NOT NULL
	,TELEFONE VARCHAR(255)
	,RG CHAR(9) UNIQUE
	,CPF CHAR(11) UNIQUE
	,ENDERECO VARCHAR(100)
);

CREATE TABLE SITUACOES(
	ID INT IDENTITY PRIMARY KEY
	,SITUACAO VARCHAR(50)
);

CREATE TABLE CONSULTAS(
	ID INT IDENTITY PRIMARY KEY
	,ID_PRONTUARIO INT FOREIGN KEY REFERENCES PRONTUARIOS(ID)
	,ID_MEDICO INT FOREIGN KEY REFERENCES MEDICOS(ID) NOT NULL
	,DATA_DA_CONSULTA DATETIME NOT NULL
	,DESCRICAO VARCHAR(255)
	,ID_SITUACAO INT FOREIGN KEY REFERENCES SITUACOES(ID)
);

SELECT * FROM CLINICA
SELECT * FROM USUARIOS
SELECT * FROM TIPO_USUARIOS
SELECT * FROM ESPECIALIDADES
SELECT * FROM PRONTUARIO
SELECT * FROM MEDICOS
SELECT * FROM CONSULTA
SELECT * FROM SITUACAO


--------------NUMERO DE USUARIOS CADASTRADOS------------------------

SELECT COUNT (*) FROM USUARIOS

-----------CONVERTER DATA DE NASCIMENTO (MM-DD-YYYY)----------------

SELECT CONVERT (VARCHAR(10), CAST(DATA_DE_NASCIMENTO AS DATE), 101) AS DATA_DE_NASCIMENTO FROM PRONTUARIOS

-------------NUMERO DE MEDICOS POR ESPECIALIDADE--------------------

CREATE FUNCTION MEDICOS_POR_ESPECIALIDADE(@ESPECIALIDADE_RECEBIDA INT)
RETURNS TABLE
AS
RETURN SELECT COUNT(*) QUANTIDADE FROM MEDICOS WHERE ID_ESPECIALIDADE = 2;

---------------IDADE DE DETERMINADO USUARIO-------------------------

SELECT FLOOR(DATEDIFF(DAY, DATA_DE_NASCIMENTO, GETDATE()) / 365.25) AS IDADE_DO_PACIENTE FROM PRONTUARIOS

---------------INNER JOIN MEDICOS/ESPECIALIDADE----------------------

SELECT MEDICOS.*,ESPECIALIDADES.ESPECIALIDADE
FROM MEDICOS INNER JOIN ESPECIALIDADES
ON MEDICOS.ID_ESPECIALIDADE = ESPECIALIDADES.ID

---------------INNER JOIN PRONTUARIO/CONSULTA------------------------

SELECT PRONTUARIOS.*, CONSULTAS.ID_PRONTUARIO,CONSULTAS.ID_MEDICO,CONSULTAS.DATA_DA_CONSULTA,CONSULTAS.DESCRICAO,CONSULTAS.ID_SITUACAO
FROM PRONTUARIOS INNER JOIN CONSULTAS
ON PRONTUARIOS.ID = CONSULTAS.ID