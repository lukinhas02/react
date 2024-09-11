import React from 'react'
// src/components/Informacoes.jsx
import React from 'react';

const Informacoes = () => {
  // Declarar as variáveis
  const nome = 'Lucas';
  const sobrenome = 'MELO';
  const matricula = '2324290088';
  const nomeProfessor = 'Felipe';
  const nomeDisciplina = 'Frontend';

  // 
  const nomeCompleto = `${nome} ${sobrenome}`;

  return (
    <div>
      <h1>Informações do Estudante</h1>
      <p><strong>Nome Completo:</strong> {nomeCompleto}</p>
      <p><strong>Matrícula:</strong> {matricula}</p>
      <h2>Informações do Curso</h2>
      <p><strong>Professor:</strong> {nomeProfessor}</p>
      <p><strong>Disciplina:</strong> {nomeDisciplina}</p>
    </div>
  );
};

export default Informacoes;
