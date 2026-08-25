/* =========================
   PRODUTOS E LOJAS
========================= */

var produtos = {
  "50075": "BOLINHO ANA MARIA 35G BAUNILHA",
  "23702": "BOLINHO ANA MARIA 35G CENOURA",
  "39767": "BOLINHO ANA MARIA 35G CHOC",
  "40214": "BOLINHO ANA MARIA 35G DUPLO CHOC",
  "39764": "BOLINHO ANA MARIA 35G GOTAS CHOC",
  "504227": "BOLINHO ANA MARIA 42G COB AVELA 42G",
  "2694": "BOLINHO ANA MARIA 42G COBERTURA CHOC",
  "2967": "BOLINHO ANA MARIA 42G NAPOLITANO",
  "5096": "BOLINHO ANA MARIA 70G BAUNILHA",
  "3883": "BOLINHO ANA MARIA 70G CHOC",
  "2707": "BOLINHO ANA MARIA 70G GOTAS CHOC",
  "506390": "BOLINHO ANA MARIA MORANGO 70G",
  "506392": "BOLINHO ANA MARIA BANOFFEE 70G",
  "8525": "BOLO PULLMAN 250G CHOC",
  "2877": "BOLO PULLMAN 250G GOTAS CHOC",
  "89044": "BOLO PULLMAN 250G LARANJA",
  "3910": "BOLO PULLMAN 250G FRAPE",
  "51011": "PAO FORMA PULLMAN TRADICIONAL 480G",
  "27636": "PAO FORMA PULLMAN INTEGRAL 480G",
  "504092": "PAO FORMA TRADICAO INT 400G LV",
  "504091": "PAO FORMA TRADICAO TRAD 400G LV",
  "504369": "PAO BISNAGA ARTESANO 300G",
  "504437": "PAO BISNAGA ARTESANO NA CHAPA 300G",
  "8304": "PAO BISNAGUITO PULLMAN 300G",
  "504095": "PAO BISNAGUITO TRADICAO 280G",
  "502829": "PAO BISNAGUITO PULLMAN 280G LV",
  "500199": "PAO FORMA PULLMAN GRAOS CASTANHA 450G",
  "503140": "PAO FORMA ARTESANO PULLMAN CHAPA 500G",
  "503747": "PAO FORMA ARTESAN PULLMAN AUSTRALIANO 500G",
  "7515": "PAO FORMA ARTESANO ORIGINAL 500G",
  "500290": "PAO FORMA ARTESANO PULLMAN INTEGRAL 500G",
  "230053": "PAO FORMA PULLMAN 12 GRAOS 450G",
  "230045": "PAO FORMA PULLMAN ZERO 12GRAOS 350G",
  "8802": "PAO FORMA PULLMAN INTEGRAL ZERO 350G",
  "28541": "PAO FORMA NUTRELLA FRUTAS GRAOS 500G",
  "20109": "PAO FORMA GRAOS CAST NUTRELLA 450G",
  "20108": "PAO FORMA NUTRELLA 14GRAOS 450G",
  "28540": "PAO FORMA NATURAL NUTRELLA NATURAL 450G",
  "503655": "PAO FORMA NUTRELLA AVEIA 305G",
  "503129": "PAO FORMA NUTRELLA CRANBERRY 350G",
  "503128": "PAO FORMA NUTRELLA ABOBORA 350G",
  "503130": "PAO FORMA NUTRELLA CAST QUINOA",
  "502644": "PAO HAMBURGUER BRIOCHE PULLMAN",
  "502642": "PAO HAMBURGUER C GERGELIM PULL 420G",
  "505880": "PAO HAMBURGUER ARTESANO AUSTRALIANO 420G",
  "505878": "PAO HAMBURGUER ARTESANO ORIGINAL 420G",
  "29381": "RAP 10 FIT 297G",
  "29382": "RAP 10 INTEGRAL 297G",
  "502802": "RAP 10 TAPIOCA 198G",
  "29380": "RAP 10 TRADICIONAL 297G",
  "20730": "SALG CROCANTISSIMO 40G QUEIJO/CEBOLA",
  "47067": "SALG CROCANTISSIMO 40G CHURRASSCO",
  "22567": "SALG CROCANTISSIMO 40G PEITO PERU/REQ",
  "39771": "SALG CROCANTISSIMO 40G SALEME LIMAO",
  "506381": "SALG.TAKIS XPLOSION 49G",
  "506382": "SALG.TAKIS ORIGINAL 49G",
  "506383": "SALG.TAKIS FUEGO 49G",
  "964775": "SALG.TAKIS INTENSE NACHO 49G",
  "2893": "FARINHA ROSCA PULLMAN 500G"
};

var lojas = {
  "180056": "548-MIX MATEUS MAGUARI",
  "180050": "531-MIX MATEUS MARITUBA",
  "146611": "37-MATEUS MIX BELEM",
  "180296": "46-MATEUS SUPER MAGUARI",
  "178299": "45-MATEUS SUPER MARAMBAIA",
  "180303": "263-MATEUS MIX MARIO COVAS",
  "178301": "276-MATEUS MIX BENGUI",
  "160141": "36-MATEUS SUPER ANANINDEUA",
  "178300": "253-MATEUS MIX PEDREIRA",
  "180302": "257-MATEUS MIX COQUEIRO",
  "180297": "49-MATEUS MIX CASTANHAL",
  "146610": "35-MATEUS SUPER CASTANHAL",
  "180298": "50-MATEUS ABAETETUBA",
  "180301": "256-MATEUS MIX CAPANEMA",
  "180305": "268-MATEUS MIX PARAGOMINAS",
  "180304": "267-MATEUS MIX BRAGANCA",
  "180300": "204-MATEUS BARCARENA",
  "180306": "464-POSTERUS CAMINO TOME AÇU",
  "180307": "463-POSTERUS SAO MIGUEL GUAMA",
  "183646": "MATEUS DOCA",
  "124291": "FORMOSA DUQUE",
  "143013": "FORMOSA UMARIZAL",
  "180291": "FORMOSA GUAMA",
  "129404": "FORMOSA AUGUSTO",
  "129405": "FORMOSA CIDADE NOVA",
  "180340": "215-ATACADAO PORTAL",
  "180341": "230-ATACADAO CASTANHAL",
  "180339": "153-ATACADAO ICOARACI",
  "180344": "326-ATACADAO ABAETETUBA",
  "180342": "238-ATACADAO CASTANHEIRA",
  "152269": "138-ATACADAO BR CENTRO",
  "180343": "276-ATACADAO COQUEIRO",
  "180361": "252-ASSAI ALMIRANTE BARROSO",
  "180360": "235-ASSAI BATISTA CAMPOS",
  "160149": "135-ASSAI BR CENTRO",
  "180358": "169-ASSAI CASTANHAL",
  "180352": "118-ASSAI MARIO COVAS",
  "180362": "322-ASSAI AUGUSTO MONTENEGRO"
};

/* =========================
   LOJAS E PRODUTOS ADICIONADOS PELO USUÁRIO
========================= */

var lojasExtras = {};
var produtosExtras = {};

function carregarExtras() {
  try {
    var le = localStorage.getItem("lojas_extras");
    if (le) {
      lojasExtras = JSON.parse(le) || {};
      for (var k in lojasExtras) {
        if (lojasExtras.hasOwnProperty(k)) lojas[k] = lojasExtras[k];
      }
    }
  } catch(e) { console.log("Erro carregar lojas extras:", e); }

  try {
    var pe = localStorage.getItem("produtos_extras");
    if (pe) {
      produtosExtras = JSON.parse(pe) || {};
      for (var k2 in produtosExtras) {
        if (produtosExtras.hasOwnProperty(k2)) produtos[k2] = produtosExtras[k2];
      }
    }
  } catch(e) { console.log("Erro carregar produtos extras:", e); }
}

carregarExtras();

function adicionarLoja() {
  var codigo = prompt("Código da loja:");
  if (codigo === null) return;
  codigo = codigo.trim();
  if (!codigo) { alert("Código inválido."); return; }
  if (lojas[codigo]) { alert("Já existe uma loja cadastrada com este código."); return; }

  var nome = prompt("Nome da loja:");
  if (nome === null) return;
  nome = nome.trim().toUpperCase();
  if (!nome) { alert("Nome inválido."); return; }

  lojas[codigo] = nome;
  lojasExtras[codigo] = nome;
  try { localStorage.setItem("lojas_extras", JSON.stringify(lojasExtras)); } catch(e) { console.log("Erro salvar loja:", e); }
  alert("Loja adicionada! Já está disponível na lista de busca.");
}

function adicionarProduto() {
  var codigo = prompt("Código do produto:");
  if (codigo === null) return;
  codigo = codigo.trim();
  if (!codigo) { alert("Código inválido."); return; }
  if (produtos[codigo]) { alert("Já existe um produto cadastrado com este código."); return; }

  var nome = prompt("Nome do produto:");
  if (nome === null) return;
  nome = nome.trim().toUpperCase();
  if (!nome) { alert("Nome inválido."); return; }

  produtos[codigo] = nome;
  produtosExtras[codigo] = nome;
  try { localStorage.setItem("produtos_extras", JSON.stringify(produtosExtras)); } catch(e) { console.log("Erro salvar produto:", e); }
  alert("Produto adicionado! Já está disponível na lista de busca.");
}

/* =========================
   DROPDOWN
========================= */

var dropdownAtivo = null;
var inputDropdownAtivo = null;

function fecharTodosDropdowns() {
  var abertos = document.querySelectorAll(".dropdown-lista");
  for (var i = 0; i < abertos.length; i++) abertos[i].remove();
  dropdownAtivo = null;
  inputDropdownAtivo = null;
}

document.addEventListener("touchstart", function(e) {
  if (dropdownAtivo && !dropdownAtivo.contains(e.target) && e.target !== inputDropdownAtivo) {
    fecharTodosDropdowns();
  }
}, { passive: true });

document.addEventListener("mousedown", function(e) {
  if (dropdownAtivo && !dropdownAtivo.contains(e.target) && e.target !== inputDropdownAtivo) {
    fecharTodosDropdowns();
  }
});

function posicionarDropdown(lista, input) {
  var rect = input.getBoundingClientRect();
  var spaceBelow = window.innerHeight - rect.bottom;
  var spaceAbove = rect.top;
  var maxH = 220;

  lista.style.position = "fixed";
  lista.style.left = rect.left + "px";
  lista.style.width = Math.max(rect.width, 280) + "px";
  lista.style.zIndex = "99999";

  if (spaceBelow < maxH && spaceAbove > spaceBelow) {
    lista.style.bottom = (window.innerHeight - rect.top) + "px";
    lista.style.top = "auto";
    lista.style.maxHeight = Math.min(spaceAbove - 8, maxH) + "px";
  } else {
    lista.style.top = rect.bottom + "px";
    lista.style.bottom = "auto";
    lista.style.maxHeight = Math.min(spaceBelow - 8, maxH) + "px";
  }
}

function mostrarDropdown(input, resultados, aoSelecionar) {
  fecharTodosDropdowns();
  if (resultados.length === 0) return;

  var lista = document.createElement("div");
  lista.className = "dropdown-lista";

  for (var i = 0; i < resultados.length; i++) {
    (function(item) {
      var div = document.createElement("div");
      div.className = "dropdown-item";
      div.textContent = item.codigo + " — " + item.nome;

      // CONTROLE DE TOQUE PARA EVITAR SELEÇÃO ACIDENTAL NO SCROLL
      var touchMoved = false;
      var touchStarted = false;

      div.addEventListener("touchstart", function(e) {
        touchMoved = false;
        touchStarted = true;
        // Guarda a posição inicial para detectar scroll
        var touch = e.touches[0];
        div._startX = touch.clientX;
        div._startY = touch.clientY;
      }, { passive: true });

      div.addEventListener("touchmove", function(e) {
        if (!touchStarted) return;
        var touch = e.touches[0];
        var dx = Math.abs(touch.clientX - div._startX);
        var dy = Math.abs(touch.clientY - div._startY);
        // Se moveu mais de 10px, é scroll, não clique
        if (dx > 10 || dy > 10) {
          touchMoved = true;
        }
      }, { passive: true });

      div.addEventListener("touchend", function(e) {
        if (!touchStarted) return;
        touchStarted = false;
        // SÓ SELECIONA SE NÃO HOUVE SCROLL (movimento menor que 10px)
        if (!touchMoved) {
          e.preventDefault();
          aoSelecionar(item);
          fecharTodosDropdowns();
        }
      }, { passive: false });

      // PARA MOUSE (Desktop)
      div.addEventListener("mousedown", function(e) {
        e.preventDefault();
        aoSelecionar(item);
        fecharTodosDropdowns();
      });

      lista.appendChild(div);
    })(resultados[i]);
  }

  document.body.appendChild(lista);
  posicionarDropdown(lista, input);
  dropdownAtivo = lista;
  inputDropdownAtivo = input;
}

function buscarNoDicionario(texto, dicionario) {
  var resultados = [];
  var t = texto.trim().toUpperCase();
  if (t.length < 1) return resultados;
  for (var key in dicionario) {
    if (!dicionario.hasOwnProperty(key)) continue;
    var nome = dicionario[key].toUpperCase();
    if (key.toUpperCase().indexOf(t) === 0 || nome.indexOf(t) !== -1) {
      resultados.push({ codigo: key, nome: dicionario[key] });
    }
    if (resultados.length >= 10) break;
  }
  return resultados;
}

/* =========================
   CONTROLE DE FORMULÁRIOS
========================= */

var totalFormularios = 0;
var contadorLinhaCD = 0;

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    adicionarFormulario();
    restaurarDados();
    document.addEventListener("input", salvarDados);
    window.addEventListener("beforeunload", salvarDados);
  }, 100);
});

/* =========================
   HTML DO FORMULÁRIO
========================= */

function criarHTMLFormulario(id) {
  var cdId = "cd-" + (++contadorLinhaCD);
  return '<div class="modelo" data-form-id="' + id + '">' +
    '<table class="cabecalho"><tr>' +
    '<td class="logo-td"><img src="data:image/webp;base64,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" class="logo" alt="Logo"></td>' +
    '<td class="titulo">CONTROLE DE RECOLHIMENTO DE MERCADORIAS</td>' +
    '</tr></table>' +
    '<table class="dados">' +
    '<tr>' +
    '<td><label>CÓDIGO DO CLIENTE:</label>' +
    '<input type="text" class="campo-busca campo-loja" autocomplete="off" placeholder="Digite código ou nome"></td>' +
    '<td class="td-dupla"><div class="td-dupla-inner">' +
    '<div class="sub-campo"><label>DATA DO RECOLHIMENTO:</label><input type="text" class="data-br" inputmode="numeric"></div>' +
    '<div class="sub-campo sub-campo-rca"><label>RCA :</label><input type="text" class="rca-fixo" value="318" readonly></div>' +
    '</div></td>' +
    '</tr>' +
    '<tr>' +
    '<td><label>NOME DO CLIENTE:</label>' +
    '<input type="text" class="nome-loja" readonly tabindex="-1"></td>' +
    '<td><label>NOTA FISCAL:</label>' +
    '<input type="text" inputmode="text"></td>' +
    '</tr>' +
    '</table>' +
    '<div class="table-scroll-wrapper">' +
    '<table class="produtos">' +
    '<colgroup><col><col><col><col><col><col><col><col><col></colgroup>' +
    '<thead>' +
    '<tr><th colspan="7">AVALIAÇÃO EXTERNA DO VENDEDOR</th><th colspan="2">AVALIAÇÃO INTERNA</th></tr>' +
    '<tr><th>CÓD</th><th>DESCRIÇÃO</th><th>QTDE</th><th>VALIDADE</th><th>PREÇO UNIT</th><th>TOTAL R$</th><th>MOTIVO</th><th>CD</th><th>FINANCEIRO</th></tr>' +
    '</thead>' +
    '<tbody class="tabelaProdutos">' +
    '<tr>' +
    '<td><input type="text" class="campo-busca campo-produto" autocomplete="off" placeholder="código ou nome"></td>' +
    '<td><input type="text" class="descricao-produto" readonly tabindex="-1"></td>' +
    '<td><input type="number" class="qtde" value="1" min="1"></td>' +
    '<td><input type="text" class="data-br validade-produto" inputmode="numeric" placeholder="__/__/__"></td>' +
    '<td><input type="number" class="valor" step="0.01" inputmode="decimal"></td>' +
    '<td class="total-produto">R$ 0,00</td>' +
    '<td><select><option>M1</option><option>M2</option><option>M3</option></select></td>' +
    '<td class="cd-avaliacao"><label><input type="radio" name="' + cdId + '"> VÁLIDO</label><label><input type="radio" name="' + cdId + '"> INVÁLIDO</label></td>' +
    '<td><button class="btn-remover" onclick="removerLinha(this)">✕</button></td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="5" class="linha-total"><span class="total-label">TOTAL (R$)</span></td>' +
    '<td class="linha-total linha-total-valor"><span class="total-final valor-total">R$ 0,00</span></td>' +
    '<td colspan="3" class="linha-total"></td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '</div>' +
    '<button class="btn-add no-print" onclick="adicionarLinha(this)">+ Produto</button> ' +
    '<button class="btn-limpar no-print" onclick="limparFormulario(this)">✕ Limpar</button>' +
    (id > 1 ? ' <button class="btn-limpar no-print" onclick="removerFormulario(this)">✕ Remover</button>' : '') +
    '<div class="observacao"><strong>OBSERVAÇÃO CD.:</strong>' +
    '<input type="text" class="obs-input">' +
    '<input type="text" class="obs-input">' +
    '</div>' +
    '<div class="assinaturas">' +
    '<div class="assinatura-box">' +
    '<div class="assinatura-topo"><img src="data:image/png;base64,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" class="assinatura-img" alt="Assinatura"></div>' +
    '<div class="linha"></div><span>VENDEDOR</span>' +
    '<div class="data-assinatura"><input type="date" class="data-vendedora"></div>' +
    '</div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>MOTORISTA</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>CONFERENTE</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '<div class="assinatura-box"><div class="assinatura-topo"></div>' +
    '<div class="linha"></div><span>AUX. DE DEVOLUÇÃO</span>' +
    '<div class="data-assinatura"><input type="text" placeholder="_____________"></div></div>' +
    '</div>' +
    '<div class="rodape">Motivos: M1 VALIDADE | M2 EMBALAGEM (SEM VÁCUO,RASGADO,AMASSADO)) | M3 QUALIDADE (COLORAÇÃO, CHEIRO, MOFO); Critérios: M1( somente MONDELEZ, FLAMBOYANT, MARCA PRÓPRIA, STA HELENA, BIMBO, até 20 dias após o vencimento); M2  até 7 dias após a entrega;</div>' +
    '</div>';
}

/* =========================
   BUSCAS
========================= */

function registrarBuscaLoja(input) {
  input.addEventListener("input", function() {
    var texto = this.value;
    var me = this;
    var modelo = me.closest(".modelo");
    var nomeEl = modelo ? modelo.querySelector(".nome-loja") : null;

    if (lojas[texto.trim()]) {
      if (nomeEl) nomeEl.value = lojas[texto.trim()];
      fecharTodosDropdowns();
      return;
    }

    var resultados = buscarNoDicionario(texto, lojas);
    mostrarDropdown(me, resultados, function(item) {
      me.value = item.codigo;
      if (nomeEl) nomeEl.value = item.nome;
      salvarDados();
    });
  });

  input.addEventListener("focus", function() {
    if (this.value.length >= 1) this.dispatchEvent(new Event("input"));
  });
}

function registrarBuscaProduto(input) {
  input.addEventListener("input", function() {
    var texto = this.value;
    var me = this;
    var linha = me.closest("tr");
    var descEl = linha ? linha.querySelector(".descricao-produto") : null;

    if (produtos[texto.trim()]) {
      if (descEl) descEl.value = produtos[texto.trim()];
      fecharTodosDropdowns();
      calcularTudo();
      return;
    }

    var resultados = buscarNoDicionario(texto, produtos);
    mostrarDropdown(me, resultados, function(item) {
      me.value = item.codigo;
      if (descEl) descEl.value = item.nome;
      calcularTudo();
      salvarDados();
    });
  });

  input.addEventListener("focus", function() {
    if (this.value.length >= 1) this.dispatchEvent(new Event("input"));
  });
}

/* =========================
   FORMULÁRIOS
========================= */

function adicionarFormulario() {
  totalFormularios++;
  var div = document.createElement("div");
  div.innerHTML = criarHTMLFormulario(totalFormularios);
  var modelo = div.firstChild;
  document.getElementById("areaPDF").appendChild(modelo);
  iniciarEventosModelo(modelo);
  calcularTudo();
}

function removerFormulario(botao) {
  if (!confirm("Remover este formulário?")) return;
  botao.closest(".modelo").remove();
  salvarDados();
}

function iniciarEventosModelo(modelo) {
  modelo.querySelectorAll(".campo-loja").forEach(registrarBuscaLoja);
  modelo.querySelectorAll(".campo-produto").forEach(registrarBuscaProduto);

  modelo.querySelectorAll(".qtde, .valor").forEach(function(el) {
    el.addEventListener("input", function() { calcularTudo(); salvarDados(); });
  });

  modelo.querySelectorAll(".data-br").forEach(function(el) {
    el.addEventListener("input", function() { formatarDataBR(this); salvarDados(); });
  });

  modelo.querySelectorAll(".data-vendedora").forEach(function(el) {
    el.type = "date";
    el.addEventListener("change", salvarDados);
  });
}

/* =========================
   CALCULAR
========================= */

function calcularTudo() {
  document.querySelectorAll(".modelo").forEach(function(modelo) {
    var totalGeral = 0;
    modelo.querySelectorAll("tbody tr:not(:last-child)").forEach(function(linha) {
      var qtde = linha.querySelector(".qtde");
      var valor = linha.querySelector(".valor");
      var total = linha.querySelector(".total-produto");
      if (qtde && valor && total) {
        var r = (parseFloat(qtde.value) || 0) * (parseFloat(valor.value) || 0);
        total.textContent = "R$ " + r.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalGeral += r;
      }
    });
    var tf = modelo.querySelector(".valor-total");
    if (tf) tf.textContent = "R$ " + totalGeral.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });
}

/* =========================
   ADICIONAR / REMOVER LINHA
========================= */

function adicionarLinha(botao) {
  var modelo = botao.closest(".modelo");
  var tabela = modelo.querySelector(".tabelaProdutos");
  if (!tabela) return;

  var cdId = "cd-" + (++contadorLinhaCD);
  var linha = document.createElement("tr");
  linha.innerHTML =
    '<td><input type="text" class="campo-busca campo-produto" autocomplete="off" placeholder="código ou nome"></td>' +
    '<td><input type="text" class="descricao-produto" readonly tabindex="-1"></td>' +
    '<td><input type="number" class="qtde" value="1" min="1"></td>' +
    '<td><input type="text" class="data-br validade-produto" inputmode="numeric" placeholder="__/__/__"></td>' +
    '<td><input type="number" class="valor" step="0.01" inputmode="decimal"></td>' +
    '<td class="total-produto">R$ 0,00</td>' +
    '<td><select><option>M1</option><option>M2</option><option>M3</option></select></td>' +
    '<td class="cd-avaliacao"><label><input type="radio" name="' + cdId + '"> VÁLIDO</label><label><input type="radio" name="' + cdId + '"> INVÁLIDO</label></td>' +
    '<td><button class="btn-remover" onclick="removerLinha(this)">✕</button></td>';

  tabela.insertBefore(linha, tabela.querySelector("tr:last-child"));

  registrarBuscaProduto(linha.querySelector(".campo-produto"));
  linha.querySelector(".qtde").addEventListener("input", function() { calcularTudo(); salvarDados(); });
  linha.querySelector(".valor").addEventListener("input", function() { calcularTudo(); salvarDados(); });
  linha.querySelector(".validade-produto").addEventListener("input", function() { formatarDataBR(this); salvarDados(); });

  calcularTudo();
  linha.querySelector(".campo-produto").focus();
}

function removerLinha(botao) {
  var linha = botao.closest("tr");
  var tabela = linha.closest(".tabelaProdutos");
  if (tabela.querySelectorAll("tbody tr:not(:last-child)").length <= 1) {
    alert("Mantenha pelo menos um produto!");
    return;
  }
  if (confirm("Remover este produto?")) {
    linha.remove();
    calcularTudo();
    salvarDados();
  }
}

function limparFormulario(botao) {
  if (!confirm("Limpar todos os dados deste formulário?")) return;
  var modelo = botao.closest(".modelo");
  modelo.querySelectorAll(".dados input").forEach(function(el) { el.value = ""; });

  var tabela = modelo.querySelector(".tabelaProdutos");
  var linhas = tabela.querySelectorAll("tbody tr:not(:last-child)");
  for (var j = linhas.length - 1; j > 0; j--) linhas[j].remove();

  var primeira = tabela.querySelector("tbody tr:not(:last-child)");
  if (primeira) {
    primeira.querySelectorAll("input").forEach(function(el) {
      if (el.type === "radio") { el.checked = false; return; }
      el.value = el.classList.contains("qtde") ? 1 : "";
    });
    var sel = primeira.querySelector("select");
    if (sel) sel.value = "M1";
  }

  modelo.querySelectorAll(".assinatura-box input").forEach(function(el) { el.value = ""; });
  modelo.querySelectorAll(".obs-input").forEach(function(el) { el.value = ""; });
  calcularTudo();
  salvarDados();
}

function formatarDataBR(input) {
  var v = input.value.replace(/\D/g, "").slice(0, 8);
  if (v.length > 4) v = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4);
  else if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
  input.value = v;
}

/* =========================
   SALVAR / RESTAURAR
========================= */

function salvarDados() {
  try {
    var dados = [];
    document.querySelectorAll(".modelo").forEach(function(modelo) {
      var obj = { formId: modelo.getAttribute("data-form-id"), produtos: [] };
      var inputs = modelo.querySelectorAll(".dados input");
      var labels = modelo.querySelectorAll(".dados label");
      inputs.forEach(function(inp, j) {
        if (labels[j]) obj[labels[j].textContent.replace(":", "").trim()] = inp.value;
      });
      var dv = modelo.querySelector(".data-vendedora");
      if (dv) obj.data_vendedora = dv.value;

      obj.observacoes = [];
      modelo.querySelectorAll(".obs-input").forEach(function(el) { obj.observacoes.push(el.value); });

      modelo.querySelectorAll("tbody tr:not(:last-child)").forEach(function(linha) {
        var cod = linha.querySelector(".campo-produto");
        if (cod && cod.value) {
          var cdMarcado = linha.querySelector(".cd-avaliacao input:checked");
          var cdIndex = -1;
          if (cdMarcado) {
            var cdRadios = linha.querySelectorAll(".cd-avaliacao input");
            cdIndex = Array.prototype.indexOf.call(cdRadios, cdMarcado);
          }
          obj.produtos.push({
            codigo: cod.value,
            descricao: (linha.querySelector(".descricao-produto") || {}).value || "",
            qtde: (linha.querySelector(".qtde") || {}).value || 1,
            validade: (linha.querySelector(".validade-produto") || {}).value || "",
            valor: (linha.querySelector(".valor") || {}).value || "",
            motivo: (linha.querySelector("select") || {}).value || "M1",
            cd: cdIndex
          });
        }
      });
      dados.push(obj);
    });
    localStorage.setItem("controle_recolhimento", JSON.stringify(dados));
  } catch(e) { console.log("Erro salvar:", e); }
}

function restaurarDados() {
  try {
    var salvo = localStorage.getItem("controle_recolhimento");
    if (!salvo) return;
    var dados = JSON.parse(salvo);
    if (!dados || !dados.length) return;

    var areaPDF = document.getElementById("areaPDF");
    areaPDF.innerHTML = "";
    totalFormularios = 0;

    dados.forEach(function(obj) {
      totalFormularios++;
      var div = document.createElement("div");
      div.innerHTML = criarHTMLFormulario(totalFormularios);
      var modelo = div.firstChild;
      areaPDF.appendChild(modelo);
      iniciarEventosModelo(modelo);

      var inputs = modelo.querySelectorAll(".dados input");
      var labels = modelo.querySelectorAll(".dados label");
      inputs.forEach(function(inp, j) {
        if (labels[j]) {
          var chave = labels[j].textContent.replace(":", "").trim();
          if (obj[chave] !== undefined) inp.value = obj[chave];
        }
      });

      var dv = modelo.querySelector(".data-vendedora");
      if (dv && obj.data_vendedora) dv.value = obj.data_vendedora;

      var rcaEl = modelo.querySelector(".rca-fixo");
      if (rcaEl) rcaEl.value = "318";

      if (obj.observacoes) {
        modelo.querySelectorAll(".obs-input").forEach(function(el, idx) {
          el.value = obj.observacoes[idx] || "";
        });
      }

      if (obj.produtos && obj.produtos.length) {
        var tabela = modelo.querySelector(".tabelaProdutos");
        tabela.querySelectorAll("tr:not(:last-child)").forEach(function(l) { l.remove(); });
        obj.produtos.forEach(function(prod) {
          var botao = modelo.querySelector(".btn-add");
          if (!botao) return;
          adicionarLinha(botao);
          var linhasProduto = tabela.querySelectorAll("tr:not(:last-child)");
          var nova = linhasProduto[linhasProduto.length - 1];
          if (nova) {
            var cp = nova.querySelector(".campo-produto");
            if (cp) cp.value = prod.codigo || "";
            var dp = nova.querySelector(".descricao-produto");
            if (dp) dp.value = prod.descricao || "";
            var qp = nova.querySelector(".qtde");
            if (qp) qp.value = prod.qtde || 1;
            var vdp = nova.querySelector(".validade-produto");
            if (vdp) vdp.value = prod.validade || "";
            var vp = nova.querySelector(".valor");
            if (vp) vp.value = prod.valor || "";
            var mp = nova.querySelector("select");
            if (mp) mp.value = prod.motivo || "M1";
            if (typeof prod.cd === "number" && prod.cd >= 0) {
              var cdRadios = nova.querySelectorAll(".cd-avaliacao input");
              if (cdRadios[prod.cd]) cdRadios[prod.cd].checked = true;
            }
          }
        });
      }
    });
    calcularTudo();
  } catch(e) { console.log("Erro restaurar:", e); }
}

/* =========================
   NOME DO PDF: Rec. - código - loja - dd-mm
========================= */

function nomePDF() {
  var modelo = document.querySelector(".modelo");
  if (!modelo) return "Rec.-" + obterDataAtual();

  var codigoEl = modelo.querySelector(".campo-loja");
  var nomeEl = modelo.querySelector(".nome-loja");
  var dataEl = modelo.querySelector(".data-vendedora");  // DATA DA ASSINATURA DA VENDEDORA

  var codigo = codigoEl && codigoEl.value ? codigoEl.value.trim() : "";
  var nome = nomeEl && nomeEl.value ? nomeEl.value.trim() : "";
  var data = dataEl && dataEl.value ? dataEl.value.trim() : obterDataAtual();

  // Formata a data (YYYY-MM-DD para DD-MM)
  var partes = data.split("-");
  var dataFormatada = partes.length >= 2 ? partes[2] + "-" + partes[1] : data;

  // Limpa caracteres inválidos para nome de arquivo
  var nomeBase = "Rec.";
  if (codigo) nomeBase += " - " + codigo.replace(/[\/\\:*?"<>|]/g, "");
  if (nome) nomeBase += " - " + nome.replace(/[\/\\:*?"<>|]/g, "").substring(0, 30);
  if (dataFormatada) nomeBase += " - " + dataFormatada;

  return nomeBase;
}

/* =========================
   GERAR PDF - CORRIGIDO
========================= */

function gerarPDF() {
  var elemento = document.getElementById("areaPDF");
  if (!elemento) { alert("Área do PDF não encontrada!"); return; }

  var modelosOriginais = elemento.querySelectorAll(".modelo");
  if (modelosOriginais.length === 0) {
    alert("Nenhum formulário para gerar PDF!");
    return;
  }

  if (typeof html2pdf === "undefined") {
    alert("Biblioteca de PDF não carregada. Verifique sua conexão e tente novamente.");
    return;
  }

  fecharTodosDropdowns();

  var btnPDF = document.querySelector(".btn-pdf");
  var textoOriginal = btnPDF ? btnPDF.textContent : "GERAR PDF";
  if (btnPDF) { btnPDF.textContent = "⏳ GERANDO..."; btnPDF.disabled = true; }

  // Clona o elemento (preserva os valores atuais dos campos)
  var clone = elemento.cloneNode(true);

  clone.querySelectorAll("button").forEach(function(b) { b.remove(); });
  clone.querySelectorAll(".dropdown-lista").forEach(function(d) { d.remove(); });

  clone.querySelectorAll(".data-vendedora").forEach(function(el) {
    if (el.value) {
      var p = el.value.split("-");
      var span = document.createElement("span");
      span.textContent = (p[2] || "") + "/" + (p[1] || "") + "/" + (p[0] || "");
      span.style.cssText = "font-size:8px;text-align:center;display:inline-block;width:80px;border-bottom:1px solid #000;padding:2px 0;";
      el.parentNode.replaceChild(span, el);
    }
  });

  var modelosClone = clone.querySelectorAll(".modelo");

  // Container temporário fora da tela: TODOS os formulários ficam nele
  // desde já, para o navegador terminar de montar o layout (flex/tabelas)
  // antes de qualquer captura — evita bordas cortadas por captura prematura.
  var tempDiv = document.createElement("div");
  tempDiv.style.cssText = "position:fixed;left:-9999px;top:0;width:794px;background:#fff;overflow:visible;z-index:99999;";
  document.body.appendChild(tempDiv);

  modelosClone.forEach(function(m) {
    m.style.cssText = "width:794px; max-width:794px; margin:0 0 10px 0; background:#fff; border:1px solid #000; padding:10px; box-sizing:border-box;";
    tempDiv.appendChild(m);
  });

  var opcoesCanvas = {
    html2canvas: { scale: 2, useCORS: true, allowTaint: false, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0, logging: false },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  function aguardarLayoutEstavel() {
    return new Promise(function(resolve) {
      requestAnimationFrame(function() {
        requestAnimationFrame(resolve);
      });
    });
  }

  function capturarCanvas(elementoModelo) {
    return html2pdf().set(opcoesCanvas).from(elementoModelo).toCanvas().get("canvas");
  }

  // Desenha até 2 formulários (canvasTop / canvasBottom) empilhados numa
  // única página, apagando antes qualquer conteúdo que já estivesse nela.
  function desenharNaPagina(pdf, canvasTop, canvasBottom) {
    var margemX = 3;
    var margemY = 4;
    var gap = 4;
    var pageWidth = pdf.internal.pageSize.getWidth();
    var pageHeight = pdf.internal.pageSize.getHeight();
    var maxWidth = pageWidth - margemX * 2;
    var maxHeight = canvasBottom
      ? (pageHeight - margemY * 2 - gap) / 2
      : pageHeight - margemY * 2;

    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");

    function desenhar(canvas, y) {
      var imgWidth = maxWidth;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight;
        imgWidth = (canvas.width * imgHeight) / canvas.height;
      }
      var x = (pageWidth - imgWidth) / 2;
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.98), "JPEG", x, y, imgWidth, imgHeight);
    }

    desenhar(canvasTop, margemY);
    if (canvasBottom) desenhar(canvasBottom, margemY + maxHeight + gap);
  }

  // Elemento minúsculo usado só para obter, via html2pdf, uma instância de jsPDF
  // (essa versão do html2pdf não expõe html2canvas/jsPDF como globais).
  var dummy = document.createElement("div");
  dummy.style.cssText = "width:10px;height:10px;background:#fff;";
  tempDiv.appendChild(dummy);

  aguardarLayoutEstavel()
    .then(function() {
      return html2pdf().set(opcoesCanvas).from(dummy).toPdf().get("pdf");
    })
    .then(function(pdf) {
      function processarModelo(indice) {
        if (indice >= modelosClone.length) return Promise.resolve();
        return capturarCanvas(modelosClone[indice]).then(function(canvasTop) {
          var temSegundo = indice + 1 < modelosClone.length;
          return (temSegundo ? capturarCanvas(modelosClone[indice + 1]) : Promise.resolve(null))
            .then(function(canvasBottom) {
              if (indice > 0) pdf.addPage();
              desenharNaPagina(pdf, canvasTop, canvasBottom);
              return processarModelo(indice + (canvasBottom ? 2 : 1));
            });
        });
      }
      return processarModelo(0).then(function() { return pdf; });
    })
    .then(function(pdf) {
      document.body.removeChild(tempDiv);
      pdf.save(nomePDF() + ".pdf");
      if (btnPDF) {
        btnPDF.textContent = "✅ PRONTO!";
        setTimeout(function() {
          btnPDF.textContent = textoOriginal;
          btnPDF.disabled = false;
        }, 2000);
      }
    })
    .catch(function(err) {
      console.error("Erro ao gerar PDF:", err);
      if (tempDiv.parentNode) document.body.removeChild(tempDiv);
      alert("Erro ao gerar PDF: " + err.message);
      if (btnPDF) {
        btnPDF.textContent = textoOriginal;
        btnPDF.disabled = false;
      }
    });
}

function obterDataAtual() {
  var d = new Date();
  return String(d.getDate()).padStart(2,"0") + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + d.getFullYear();
}

/* GLOBAIS */
window.calcularTudo = calcularTudo;
window.adicionarLinha = adicionarLinha;
window.removerLinha = removerLinha;
window.limparFormulario = limparFormulario;
window.removerFormulario = removerFormulario;
window.adicionarFormulario = adicionarFormulario;
window.adicionarLoja = adicionarLoja;
window.adicionarProduto = adicionarProduto;
window.gerarPDF = gerarPDF;
window.formatarDataBR = formatarDataBR;
