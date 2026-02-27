# Desafio de Automação Mobile

Este repositório contém a **estrutura e tentativa de implementação da automação mobile**, como parte do desafio técnico.

---

## 🎯 Objetivo

Implementar automação mobile web utilizando **Chrome no Android**, conforme proposto no desafio.

---

## 🧰 Tecnologias e Ferramentas

- Node.js
- WebdriverIO
- Appium 2.x
- Android Studio
- Android Emulator
- Chrome Mobile

---

## 📱 Ambiente Configurado

- Emulador: **Pixel 5**
- Android: **14 (API 34)**
- Chrome Mobile: **versão 113**
- Appium Server: **rodando localmente**
- WDIO configurado para execução mobile

---

## 📁 Estrutura do Projeto


├── test
│ └── specs
│ └── test.e2e.js
├── wdio.conf.js
├── package.json
└── README.md


---

## ⚠️ Bloqueio Encontrado

Durante a execução dos testes mobile, foi identificado um bloqueio relacionado à **compatibilidade entre o Chrome Mobile instalado no emulador e o ChromeDriver utilizado pelo Appium**.

O erro apresentado indica falha na criação da sessão:


Failed to create a session
Unable to connect to http://127.0.0.1


Esse comportamento é comum em cenários envolvendo:
- Appium 2.x
- Chrome Mobile recente
- Gerenciamento de ChromeDriver no Android Emulator

Apesar das tentativas de ajuste de versão de Android, Chrome e emulador, a sessão do navegador não foi estabelecida com sucesso dentro do tempo do desafio.

---

## 🧠 Considerações

Apesar de ainda não atuar profissionalmente com **automação mobile**, foi possível:

- Configurar o Android Studio e o Emulator
- Subir e validar o Appium Server
- Criar a estrutura base de automação mobile
- Configurar WebdriverIO + Appium
- Identificar e documentar um problema real de compatibilidade da stack

Este repositório representa o **processo de aprendizado, investigação e troubleshooting**, mantendo transparência sobre o estágio atual da automação mobile.

---

## 📌 Observação Final

A automação de API foi concluída com sucesso em repositório separado.  
A automação mobile permanece como **work in progress**, com base técnica preparada para evolução futura.
Este projeto contempla a **estrutura, configuração e tentativa de implementação** da automação mobile web utilizando **WebdriverIO + Appium + Chrome no Android**.
Durante o desenvolvimento, foram enfrentados desafios relacionados à **compatibilidade entre versões do Chrome Mobile, Chromedriver e Android Emulator**, o que impediu a execução completa dos testes no ambiente disponível.
Apesar disso, toda a **estrutura do projeto**, configuração, documentação e investigação técnica foram realizadas conforme boas práticas, refletindo o processo real de implementação e troubleshooting em automação mobile.
Este desafio representou meu **primeiro contato prático com automação mobile**, sendo uma experiência de grande aprendizado.

