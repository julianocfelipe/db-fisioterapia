INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Bruno Emanuel Assis', '03690791081', 'C6MAETfaTD', '48996517030', 2, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Márcia Camila Gonçalves', '95003659016', 'ecIuautzyc', '46930882574', 11, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Lorenzo Bento Silveira', '65804407910', 'OkfOIBJU6h', '96927112646', 3, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Benedito Kaique Erick de Paula', '19761786900', 'SlL75tASaT', '48986347457', 4, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Felipe Nelson Freitas', '62937787908', 'MWx5r0mKjL', '48991330138', 5, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Patrícia Nina Galvão', '78704518942', 'zAZUCi6qpB', '48984011801', 6, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Nicolas Julio Victor Costa', '50393132927', 'QJ0hQoeF4Z', '48981417642', 7, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Pedro Henrique Enrico Barros', '97871593935', 'pPCFPTW0ta', '48989848888', 8, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Caio Henry Nogueira', '04833537958', 'rhsg5fCzxi', '48994271661', 9, 'https://thispersondoesnotexist.com');
INSERT INTO db_fisio_oficial.dbo.physiotherapists
(name, cpf, crf, phone, address_id, image_url)
VALUES('Victor Enrico dos Santos', '98673868920', 'lOmrYnFohF', '48982553515', 10, 'https://thispersondoesnotexist.com');


INSERT INTO db_fisio_oficial.dbo.addresses
(id, cep, state, city, neighbourhood, [number], complement, street)
VALUES(1, '88806555', 'SC', 'Criciúma', 'Pinheirinho', '108', '', 'Rua Lauro Pedro Dias');

INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88805223', 'SC', 'Criciúma', 'Santa Augusta', '35', '', 'Rua Lidia Maria José Maçaneiro');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88819035', 'SC', 'Criciúma', 'Vila Miguel', '22', '', 'Rua Manoel de Abreu');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88819250', 'SC', 'Criciúma', '', '100', '', 'Rua José Colombo');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88805530', 'SC', 'Criciúma', 'São Francisco', '22', '', 'Rua Luiz Alves');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88805505', 'SC', 'Criciúma', 'São Francisco', '2001', '', 'Avenida dos Italianos');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88810172', 'SC', 'Criciúma', 'Lote Seis', '808', '', 'Rua Fagundes Varela');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88805247', 'SC', 'Criciúma', 'Lote Seis', '801', 'Proximo ao Posto', 'Rua José Hercílio Alano');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88804460', 'SC', 'Criciúma', 'Pinheirinho', '456', '', 'Rua Eugênio Tessmann');


INSERT INTO db_fisio_oficial.dbo.addresses
(cep, state, city, neighbourhood, number, complement, street)
VALUES('88819246', 'SC', 'Criciúma', 'Colonial', 'S/N', 'Na frente da 769', 'Rua Valentim Pizzolo');

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Fisioterapia', 180);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Massagem', 90);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Cirurgia Membros Inferiores', 1200);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Análise Clinica', 150);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Outros', 0);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Quiropraxia', 150);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Análise Física', 200);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Retorno', 0);

INSERT INTO db_fisio_oficial.dbo.services
(description, price)
VALUES('Cirurgia Não Invasiva', 800);


INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Não Realizado');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Confirmado');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Análise de Crédito');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Análise de financiamento');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Em Aprovação');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Erro na Cobrança');

INSERT INTO db_fisio_oficial.dbo.payments_status
(description)
VALUES('Erro de Geração Bancária');

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Mateus Mário Osvaldo Castro', '41328810917', '1952-06-20', '48991762390', 'M', 12);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Davi Manoel Barbosa', '63397196949', '1981-04-26', '48982829856', 'M', 13);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Caleb Thiago Renato Rodrigues', '83001483962', '1995-01-13', '48998728822', 'M', 14);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Brenda Yasmin Giovana Farias', '72794533924', '1979-06-14', '48983151454', 'F', 15);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Emilly Caroline Alice Sales', '27812750930', '1972-04-11', '48993771861', 'F', 16);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Alexandre Henry Yago Bernardes', '33670164979', '1962-01-12', '48986711822', 'M', 17);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Márcia Beatriz Regina Baptista', '36803813959', '1949-04-13', '48984936411', 'F', 18);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Gustavo Alexandre Márcio Moreira', '81345843909', '2004-02-11', '48994713347', 'M',  19);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Elaine Luzia Assunção', '32913443915', '1986-05-08', '48997638796', 'M', 20);

INSERT INTO db_fisio_oficial.dbo.patients
(name, cpf, birthday, phone, gender, address_id)
VALUES('Cláudio Bernardo Duarte', '48616469958', '1994-01-24', '48989114290', 'M', 21);
