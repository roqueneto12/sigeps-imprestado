const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const connection = require("./database");

const app = express();
const connection = new Sequelize('sigeps', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Middleware
app.use(cors());
app.use(express.json());

// Test the database connection
connection.authenticate()
    .then(() => console.log('Connected to MySQL database'))
    .catch(err => console.error('Unable to connect to the database:', err));

// Import models from MANUTENÇÃO
const Administrador = require('./models/manutencao/Administrador');
const Chamados = require('./models/manutencao/Chamados');
const Clientes = require('./models/manutencao/Clientes');
const Especialidade = require('./models/manutencao/Especialidade');
const EspecialidadeEspecialista = require('./models/manutencao/EspecialidadeEspecialista');
const EspecialistaChamado = require('./models/manutencao/EspecialistaChamado');
const Especialistas = require('./models/manutencao/Especialistas');
const Sistemas = require('./models/manutencao/Sistemas');
const StatusChamado = require('./models/manutencao/StatusChamado');
const TipoManutencao = require('./models/manutencao/TipoManutencao');
const TipoSistema = require('./models/manutencao/TipoSistema');
const Triagem = require('./models/manutencao/Triagem');

// Import models from TESTE
const Cliente = require('./models/teste/Cliente');
const Adm = require('./models/teste/Adm');
const Status = require('./models/teste/Status');
const TipoDeTeste = require('./models/teste/TipoDeTeste');
const CodigoTipoManutencao = require('./models/teste/CodigoTipoManutencao');
const StatusRelato = require('./models/teste/StatusRelato');
const PlanoDeTeste = require('./models/teste/PlanoDeTeste');
const Testador = require('./models/teste/Testador');
const Tipo = require('./models/teste/Tipo');
const RelatosDeNaoConformidade = require('./models/teste/RelatosDeNaoConformidade');

// Import models from IMPLANTAÇÃO
const Usuarios = require('./models/implantacao/Usuarios');
const PlanoImplementacao = require('./models/implantacao/PlanoImplementacao');
const TipoRecurso = require('./models/implantacao/TipoRecurso');
const Recursos = require('./models/implantacao/Recursos');
const Cronograma = require('./models/implantacao/Cronograma');
const Atividades = require('./models/implantacao/Atividades');
const RecursosSistemas = require('./models/implantacao/RecursosSistemas');



// Create a route to get data
app.get('/administrador', async (req, res) => {
    try {
        const admins = await Administrador.findAll();
        res.json(admins);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/chamados', async (req, res) => {
    try {
        const chamados = await Chamados.findAll(); // Changed to chamados
        res.json(chamados);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Clientes.findAll(); // Changed to triagens
        res.json(clientes);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialidade', async (req, res) => {
    try {
        const especialidade = await Especialidade.findAll();
        res.json(especialidades);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialidade-especialista', async (req, res) => {
    try {
        const especialidadeEspecialistas = await EspecialidadeEspecialista.findAll();
        res.json(especialidadeEspecialistas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialista-chamado', async (req, res) => {
    try {
        const especialistaChamados = await EspecialistaChamado.findAll();
        res.json(especialistaChamados);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/especialistas', async (req, res) => {
    try {
        const especialistas = await Especialistas.findAll();
        res.json(especialistas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/status-chamado', async (req, res) => {
    try {
        const statusChamados = await StatusChamado.findAll();
        res.json(statusChamados);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipo-manutencao', async (req, res) => {
    try {
        const tipoManutencao = await TipoManutencao.findAll();
        res.json(tipoManutencao);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipo-sistema', async (req, res) => {
    try {
        const tipoSistema = await TipoSistema.findAll();
        res.json(tipoSistema);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/triagem', async (req, res) => {
    try {
        const triagens = await Triagem.findAll(); // Changed to triagens
        res.json(triagens);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).send('Internal Server Error');
    }
});

app.get('/sistemas', async (req, res) => {
    try {
        const sistemas = await Sistemas.findAll();
        res.json(sistemas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/plano-implementacao', async (req, res) => {
    try {
        const planos = await PlanoImplementacao.findAll();
        res.json(planos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipo-recurso', async (req, res) => {
    try {
        const tipos = await TipoRecurso.findAll();
        res.json(tipos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/recursos', async (req, res) => {
    try {
        const recursos = await Recursos.findAll();
        res.json(recursos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/cronograma', async (req, res) => {
    try {
        const cronogramas = await Cronograma.findAll();
        res.json(cronogramas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/atividades', async (req, res) => {
    try {
        const atividades = await Atividades.findAll();
        res.json(atividades);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/recursos-sistemas', async (req, res) => {
    try {
        const recursosSistemas = await RecursosSistemas.findAll();
        res.json(recursosSistemas);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/adm', async (req, res) => {
    try {
        const adms = await Adm.findAll();
        res.json(adms);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/status', async (req, res) => {
    try {
        const statusList = await Status.findAll();
        res.json(statusList);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/especialidades', async (req, res) => {
    try {
        const especialidades = await Especialidade.findAll();
        res.json(especialidades);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipos-de-teste', async (req, res) => {
    try {
        const tiposDeTeste = await TipoDeTeste.findAll();
        res.json(tiposDeTeste);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/codigos-tipo-manutencao', async (req, res) => {
    try {
        const codigosTipoManutencao = await CodigoTipoManutencao.findAll();
        res.json(codigosTipoManutencao);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/status-relato', async (req, res) => {
    try {
        const statusRelato = await StatusRelato.findAll();
        res.json(statusRelato);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/planos-de-teste', async (req, res) => {
    try {
        const planosDeTeste = await PlanoDeTeste.findAll();
        res.json(planosDeTeste);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/testadores', async (req, res) => {
    try {
        const testadores = await Testador.findAll();
        res.json(testadores);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tipos', async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        res.json(tipos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/relatos-de-nao-conformidade', async (req, res) => {
    try {
        const relatosDeNaoConformidade = await RelatosDeNaoConformidade.findAll();
        res.json(relatosDeNaoConformidade);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

