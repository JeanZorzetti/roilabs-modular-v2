# 🎯 ROI LABS - ARQUITETURA MODULAR

## 📋 Visão Geral
Site institucional ROI LABS dividido em componentes modulares independentes, otimizado para WordPress/Elementor.

**Paleta:** Preto e Branco | **Design:** Sóbrio, Clean, Luxo

---

## 🏗️ Arquitetura Modular

### Estrutura de Componentes
```
/components/
├── /navigation/          # Header + Menu de navegação
├── /hero/               # Seção principal com título + CTA
├── /product-showcase/   # Demo do produto com chat
├── /features/           # Grid de funcionalidades
├── /stats/             # Estatísticas e números
├── /testimonials/      # Depoimentos rotativos
└── /cta-footer/        # Call-to-action + rodapé
```

### Cada Componente Contém:
- `component.html` - Estrutura HTML isolada
- `styles.css` - CSS específico do componente
- `script.js` - JavaScript funcional
- `README.md` - Documentação e uso

---

## ⚡ Como Usar

### Método 1: WordPress/Elementor
1. Copie o HTML do componente
2. Cole no widget HTML do Elementor
3. Adicione o CSS na seção "Custom CSS"
4. Inclua o JS no footer da página

### Método 2: HTML Puro
1. Importe os arquivos CSS no `<head>`
2. Inclua o HTML no corpo da página
3. Carregue os scripts JS antes do `</body>`

---

## 🎨 Sistema de Design

### Variáveis CSS Globais
```css
:root {
    --black: #000000;
    --white: #ffffff;
    --dark-gray: #0a0a0a;
    --medium-gray: #1a1a1a;
    --light-gray: #2a2a2a;
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-tertiary: rgba(255, 255, 255, 0.5);
}
```

### Tipografia
- **Font Principal:** -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter'
- **Font Weight:** 100 (Ultra Light) para títulos, 300 (Light) para texto
- **Letter Spacing:** -0.02em para títulos grandes

---

## 📊 Performance

### Otimizações Implementadas
- CSS isolado por componente (sem conflitos)
- JavaScript modular e sob demanda
- Imagens otimizadas e lazy loading
- Animações CSS puras (sem jQuery)

### Métricas Alvo
- PageSpeed Score: >80 (mobile + desktop)
- First Contentful Paint: <2s
- Cumulative Layout Shift: <0.1

---

## 🔧 Desenvolvimento

### Comandos Úteis
```bash
# Clonar repositório
git clone https://github.com/JeanZorzetti/roilabs-modular-v2.git

# Estrutura local
cd roilabs-modular-v2
```

### Fluxo de Trabalho
1. **Desenvolvimento:** Edite componentes individuais
2. **Teste:** Valide cada módulo isoladamente  
3. **Integração:** Combine componentes no template final
4. **Deploy:** Publique via WordPress ou hosting estático

---

## 🎯 Roadmap

### ✅ Fase 1: Estruturação
- [x] Criação do repositório modular
- [x] Estrutura de pastas e arquivos
- [x] Documentação individual dos componentes
- [x] CSS e JS globais configurados
- [x] Template de integração criado

### 🔄 Fase 2: Componentização (PRÓXIMO PASSO)
- [ ] Navigation component (HTML + CSS + JS)
- [ ] Hero section component
- [ ] Product showcase component  
- [ ] Features grid component
- [ ] Stats section component
- [ ] Testimonials component
- [ ] CTA + Footer component

### 🚀 Fase 3: Integração
- [ ] Template WordPress
- [ ] Guia de implementação Elementor
- [ ] Otimização de performance
- [ ] Testes cross-browser

---

## 📁 Estrutura Atual do Repositório

```
roilabs-modular-v2/
├── README.md                     ✅ Documentação principal
├── .gitignore                    ✅ Configuração Git
├── /assets/
│   ├── /css/global.css          ✅ Variáveis e reset CSS
│   └── /js/global.js            ✅ Classes utilitárias JS
├── /components/
│   ├── README.md                ✅ Guia de componentes
│   ├── /navigation/README.md    ✅ Documentação
│   ├── /hero/README.md          ✅ Documentação
│   ├── /product-showcase/README.md ✅ Documentação
│   ├── /features/README.md      ✅ Documentação
│   ├── /stats/README.md         ✅ Documentação
│   ├── /testimonials/README.md  ✅ Documentação
│   └── /cta-footer/README.md    ✅ Documentação
└── /templates/
    └── index-modular.html       ✅ Template de integração
```

---

## 📞 Suporte

**Repositório:** https://github.com/JeanZorzetti/roilabs-modular-v2

**Inteligência redefinida. Para sempre.**

*© 2025 ROI LABS - Arquitetura modular para projetos de alto impacto*