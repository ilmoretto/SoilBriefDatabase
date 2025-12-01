# SoilBrief Database Documentation

## 📋 Descrição

Documentação técnica completa da estrutura do banco de dados **db_soil** para o Soil Brief - Sistema Integrado de Monitoramento de Fertilidade do Solo com IoT e Aplicação Móvel.

Este projeto apresenta a arquitetura, design e funcionalidade do banco de dados que é fundamental para a coleta, armazenamento e análise de dados essenciais para a agricultura de precisão.

## 🏗️ Estrutura do Projeto

```
SoilBrief/
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos customizados e componentes
│   └── js/
│       └── main.js            # JavaScript principal com funcionalidades interativas
├── index.html                 # Página principal da documentação
├── bd_soil.html              # Arquivo original (mantido para referência)
└── README.md                 # Este arquivo
```

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessibilidade
- **CSS3** - Estilos customizados e responsividade
- **JavaScript ES6+** - Interatividade e funcionalidades dinâmicas
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide Icons** - Biblioteca de ícones
- **Google Fonts** - Tipografias Inter e JetBrains Mono

## 📱 Características

### Design e UX
- ✅ Design responsivo mobile-first
- ✅ Navegação suave entre seções
- ✅ Menu mobile com overlay
- ✅ Tema moderno com modo claro
- ✅ Tipografia otimizada para legibilidade
- ✅ Ícones consistentes e intuitivos

### Funcionalidades
- ✅ Navegação sticky com indicador de seção ativa
- ✅ Scroll suave com offset para navegação
- ✅ Menu mobile responsivo
- ✅ Intersection Observer para rastreamento de seções
- ✅ Otimização de performance
- ✅ Acessibilidade WCAG

### Conteúdo Técnico
- ✅ Arquitetura completa do banco de dados
- ✅ Esquemas DDL detalhados
- ✅ Consultas SQL práticas
- ✅ Integração IoT documentada
- ✅ Diagramas de relacionamento
- ✅ Exemplos de implementação

## 🚀 Como Usar

### Visualização Local

1. Clone o repositório:
```bash
git clone https://github.com/ilmoretto/SoilBriefDatabase.git
cd SoilBriefDatabase
```

2. Abra o arquivo `index.html` em um navegador web moderno

### Hospedagem

O projeto pode ser facilmente hospedado em qualquer serviço de hosting estático:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 📊 Estrutura do Banco de Dados

### Entidades Principais

1. **Usuario** - Controle de acesso e autenticação
2. **Propriedade** - Gestão de propriedades rurais
3. **Cultura** - Parâmetros ideais por tipo de cultura
4. **Solo** - Dados em tempo real de monitoramento
5. **Sensor** - Mapeamento de dispositivos IoT
6. **Historico** - Dados agregados para análise temporal

### Características Técnicas
- Relacionamentos bem definidos com chaves estrangeiras
- Índices otimizados para performance
- Constraints de integridade
- Suporte a múltiplos tipos de sensores
- Escalabilidade horizontal

## 🔧 Customização

### CSS
O arquivo `assets/css/style.css` contém:
- Variáveis CSS customizáveis
- Componentes modulares
- Media queries responsivas
- Animações e transições
- Suporte a modo escuro (preparado)

### JavaScript
O arquivo `assets/js/main.js` inclui:
- Arquitetura modular
- Event listeners otimizados
- Gestão de estado
- Utilitários de performance
- API extensível

## 📄 Seções da Documentação

1. **Introdução** - Visão geral e objetivos
2. **Modelo de Dados** - Entidades principais
3. **Monitoramento** - Estrutura de coleta de dados
4. **Análise Histórica** - Agregação e tendências
5. **DDL** - Esquemas das tabelas
6. **Fluxo IoT** - Integração com sensores
7. **Consultas** - Exemplos práticos de SQL
8. **Relações** - Mapeamento de relacionamentos

## 🌱 Sobre o SoilBrief

O SoilBrief é um sistema integrado que combina:
- **IoT** - Sensores multi-parâmetro (NPK, pH, umidade, temperatura)
- **Backend** - API .NET com MySQL
- **Mobile** - Aplicativo React Native
- **Análise** - Dashboards com sistema de semáforo

### Sensores Suportados
- NPK (Nitrogênio, Fósforo, Potássio)
- pH e condutividade
- Umidade e temperatura do solo
- Salinidade e TDS
- Protocolo Modbus RTU RS-485

## 👥 Contribuições

Este é um projeto de documentação. Para contribuições:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas alterações
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto de documentação está disponível sob licença MIT.

## 📞 Contato

- **Equipe SoilBrief** - [soilbrief@ifro.edu.br](mailto:soilbrief@ifro.edu.br)
- **GitHub** - [ilmoretto/SoilBriefDatabase](https://github.com/ilmoretto/SoilBriefDatabase)

---

*Documentação gerada em 2025 - Sistema Integrado de Monitoramento de Fertilidade do Solo com IoT e Aplicação Móvel*