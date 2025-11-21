        document.getElementById("gameForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let pontuacao = 0;

            // Pergunta 1
            const q1 = document.querySelector('input[name="q1"]:checked');
            if (q1) pontuacao += parseInt(q1.value);

            // Pergunta 2
            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2) pontuacao += parseInt(q2.value);

            // Pergunta 3
            const q3 = document.querySelectorAll('input[name="q3"]:checked');
            q3.forEach(item => pontuacao += parseInt(item.value));

            // Pergunta 4
            const q4 = document.querySelector('select[name="q4"]').value;
            pontuacao += parseInt(q4);

            // Resultado
            let mensagem = "";
            if (pontuacao >= 30) {
                mensagem = "🎉 Você foi um grande estrategista e venceu a campanha!";
            } else if (pontuacao >= 15) {
                mensagem = "⚔️ Você sobreviveu, mas sua estratégia foi mediana.";
            } else {
                mensagem = "💀 Suas decisões foram fracas e você perdeu.";
            }

            document.getElementById("resultado").innerHTML = `
        <div class="alert alert-info">
          <h4>Pontuação Final: ${pontuacao}</h4>
          <p>${mensagem}</p>
        </div>
      `;
        });