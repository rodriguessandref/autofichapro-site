/* ============================================================================
 * AVISO DE MIGRAÇÃO — este arquivo SUBSTITUI o antigo autoficha.js público.
 * ----------------------------------------------------------------------------
 * O Auto-Ficha grátis foi aposentado. Os favoritos antigos (equipe/uso livre)
 * carregam ESTE arquivo e passam a exibir um aviso: o produto agora é por
 * assinatura, com um botão pra página de vendas. O CÓDIGO REAL não vive mais
 * aqui — ele é entregue só pelo servidor de licenças (assinantes) e pela rota
 * particular do titular. Nada de funcional roda a partir deste arquivo.
 * Publicado por RODAR-build-docs.sh como docs/autoficha.js.
 * ==========================================================================*/
(function () {
  var LANDING = "https://rodriguessandref.github.io/jjrio-autoficha/comercial/venda.html";
  // limpa qualquer vestígio da versão antiga nesta máquina (painel + localStorage)
  try {
    var ls = (window.top || window).localStorage, rm = [];
    for (var i = 0; i < ls.length; i++) { var k = ls.key(i); if (k && k.indexOf("jjrio") === 0) rm.push(k); }
    for (var r = 0; r < rm.length; r++) ls.removeItem(rm[r]);
  } catch (e) {}
  try { var pnl = document.getElementById("jjrio-painel"); if (pnl) pnl.parentNode.removeChild(pnl); } catch (e2) {}
  try { var ov0 = document.getElementById("jjrio-aviso-migra"); if (ov0) ov0.parentNode.removeChild(ov0); } catch (e3) {}

  var ov = document.createElement("div");
  ov.id = "jjrio-aviso-migra";
  ov.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:rgba(6,14,19,.74);" +
    "display:flex;align-items:center;justify-content:center;font-family:-apple-system,'Segoe UI',system-ui,Arial,sans-serif";
  var box = document.createElement("div");
  box.style.cssText = "background:#fff;max-width:440px;width:92%;border-radius:18px;padding:32px 28px;text-align:center;" +
    "box-shadow:0 40px 90px -25px rgba(0,0,0,.6)";
  box.innerHTML =
    "<div style='font-size:38px;line-height:1;margin-bottom:10px'>🔐</div>" +
    "<div style='font-family:Georgia,\"Times New Roman\",serif;font-size:22px;font-weight:700;color:#0f766e;line-height:1.25;margin-bottom:14px'>" +
      "O Auto-Ficha agora é um produto por assinatura</div>" +
    "<div style='font-size:14.5px;color:#334155;line-height:1.65;margin-bottom:10px'>" +
      "Manter a ferramenta no ar — o armazenamento e as atualizações constantes conforme o SOC muda — " +
      "passou a ter um custo alto para seguir <b>gratuita</b>.</div>" +
    "<div style='font-size:14.5px;color:#334155;line-height:1.65;margin-bottom:22px'>" +
      "Para gerar os recursos necessários que mantêm o Auto-Ficha <b>funcionando e evoluindo</b>, " +
      "o acesso passou a ter uma mensalidade.</div>" +
    "<a href='" + LANDING + "' target='_blank' rel='noopener' " +
      "style='display:block;background:linear-gradient(135deg,#14b8a6,#0f766e);color:#fff;text-decoration:none;" +
      "font-weight:700;font-size:15.5px;padding:15px;border-radius:12px'>Conhecer o Auto-Ficha PRO →</a>" +
    "<div style='margin-top:15px;font-size:12.5px;color:#64748b'>" +
      "Já é assinante? Use o favorito do seu <b>e-mail de acesso</b> (não este).</div>" +
    "<div style='margin-top:12px'><a href='#' id='jjrio-aviso-x' style='font-size:12px;color:#94a3b8;text-decoration:none'>fechar</a></div>";
  ov.appendChild(box);
  (document.body || document.documentElement).appendChild(ov);
  try {
    var x = document.getElementById("jjrio-aviso-x");
    if (x) x.onclick = function (ev) { ev.preventDefault(); ov.parentNode.removeChild(ov); };
  } catch (e4) {}
})();
