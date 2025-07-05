# 📦 COMPONENTES ROI LABS

## Estrutura de Cada Componente

Todos os componentes seguem a mesma estrutura padrão:

```
/component-name/
├── component.html      # HTML isolado
├── styles.css         # CSS específico
├── script.js          # JavaScript funcional
└── README.md          # Documentação
```

## 🎯 Componentes Disponíveis

1. **Navigation** - Header com logo e menu
2. **Hero** - Seção principal com call-to-action
3. **Product Showcase** - Demo interativo do produto
4. **Features** - Grid de funcionalidades
5. **Stats** - Estatísticas animadas
6. **Testimonials** - Depoimentos rotativos
7. **CTA Footer** - Call-to-action final + rodapé

## 🔧 Como Implementar

### WordPress/Elementor
1. Copie o conteúdo de `component.html`
2. Cole no widget "HTML" do Elementor
3. Adicione o CSS do `styles.css` na seção "Custom CSS"
4. Inclua o JavaScript do `script.js` no footer

### HTML Puro
1. Importe o CSS no `<head>`
2. Inclua o HTML no corpo
3. Carregue o JS antes do `</body>`

## ⚡ Dependências Globais

Todos os componentes dependem das variáveis CSS globais:
```css
:root {
    --black: #000000;
    --white: #ffffff;
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
}
```