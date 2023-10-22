# Sistema Avaliativo Inova Week

### Projeto de POO 

**Nomes:** Diogo Soneghete, Pedro Lucas, Paulo Victor e Eduardo Moisés

**Turma:** CC4M
***

# Explicando

Sistema de avaliação por meio de notas de alunos e professores aos grupos do Inova.

A inserção de dados é feita de forma dinâmica, por forma de inserção de dados no próprio console, ao invés de inserirmos manualmente no código, o que facilitaria a vida de alguém que por exemplo não programe e necessitasse inserir dados.

***
**Para rodar o projeto utilizamos:**
```
npx ts-node-dev --respawn index.ts
```

***
**Para conferirmos os dados cadastrados podemos utilizar:**
```
npx prisma studio
```
***

# Diagrama base

![diagrama-uml](https://github.com/DiogoSoneghete/sistema_avaliativo/assets/103038064/13acb4d1-271c-4b27-b261-b71619496c0c)

## Os dados são salvos de forma que:

### Classe Usuario

![image](https://github.com/DiogoSoneghete/sistema_avaliativo/assets/103038064/21c59b5a-ea6e-4a31-9e52-30e44bc205cf)

### Classe Grupo

![image](https://github.com/DiogoSoneghete/sistema_avaliativo/assets/103038064/8831c5a7-f36a-4d0d-b7ed-10817f375060)

### Classe Avaliação

![image](https://github.com/DiogoSoneghete/sistema_avaliativo/assets/103038064/9387a4d4-ccfa-4712-ba3b-c7ab5987f9ff)
