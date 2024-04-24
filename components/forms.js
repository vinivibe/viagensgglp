import React from 'react';

export default function Forms() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
    
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
    
        try {
          const response = await fetch('https://jobo-back-3aaqwrrqp.vercel.app/api/submit-form', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await response.json();
          console.log(result);
          // Adicione aqui o que fazer depois que os dados são enviados com sucesso.
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
        }
      };

  const formStyle = {
    backgroundColor: 'white',
    margin:22,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const backgroundForms = {
    backgroundImage: `url("/img/worlds_2023.webp")`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
}

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundForms}>
    <form id='form' onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle} htmlFor="nomeCompleto">Nome completo:</label>
      <input style={inputStyle} type="text" id="nomeCompleto" name="nomeCompleto" required />

      <label style={labelStyle} htmlFor="dataNascimento">Data de nascimento:</label>
      <input style={inputStyle} type="date" id="dataNascimento" name="dataNascimento" required />

      <label style={labelStyle} htmlFor="email">Email:</label>
      <input style={inputStyle} type="email" id="email" name="email" required />

      <label style={labelStyle} htmlFor="telefone">Insira seu telefone:</label>
      <input style={inputStyle} type="tel" id="telefone" name="telefone" required />

      <label style={labelStyle} htmlFor="campeonatos">Quais Campeonatos você tem Interesse?</label>
      <select style={inputStyle} id="campeonatos" name="campeonatos" required>
        <option value="cblol">Lorem Ipsum is simply </option>
        <option value="cblolsegundosplit">Lorem Ipsum is simply</option>
      </select>

      <label style={labelStyle} htmlFor="ingressoCBLOL">Já tem ingresso para a arena CBLOL?</label>
      <select style={inputStyle} id="ingressoCBLOL" name="ingressoCBLOL" required>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <label style={labelStyle} htmlFor="experiencia">Qual dessas experiências mais faz sentido pra você?</label>
      <select style={inputStyle} id="experiencia" name="experiencia" required>
        <option value="opcao1">Um dia: Passagem Aérea + Hotel</option>
        <option value="opcao2">Um dia: Passagem Aérea + Hotel + Ingresso</option>
        <option value="opcao3">Final de Semana Gods: Passagem Aérea + Hotel + Transfer + Tour pelo Office de um dos times do CBLOL + WatchParty CBLOL no Login XP Bar</option>
        <option value="opcao4">Outro</option>

      </select>

      <label style={labelStyle} htmlFor="autorizacaoContato">Autoriza nossa Equipe a entrar em contato com você?</label>
      <select style={inputStyle} id="autorizacaoContato" name="autorizacaoContato" required>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <button style={buttonStyle} type="submit">Enviar</button>
    </form>
    </div>
  );
}

