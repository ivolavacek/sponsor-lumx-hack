import './HomePage.css'
import logo from '../../images/logo.png'
import name from "../../images/project-name3.png"
import lumx from '../../images/lumxhack-logo-ethrio.png'
import tanssi from '../../images/tanssi-logo.png'
import chiliz from '../../images/chilliz-logo.png'
import scroll from '../../images/scroll-logo.png'
import polygon from '../../images/polygon-logo.png'
import filecoin from '../../images/filecoin-logo.png'
import perfilCarlos from '../../images/perfil-carlos-junior.jpeg'
import perfilFlavia from '../../images/perfil-flavia-firmino.png'
import perfilIvo from '../../images/perfil-ivo-lavacek.jpg'
import perfilJoao from '../../images/perfil-joao-rodrigo.jpg'
import React, { useState, useContext } from 'react'
import ModeContext from '../switchButton/ModeContext'

const HomePage = () => {
    const { language } = useContext(ModeContext);

    const text = language === 'en' ? {
        title1: 'Manage copyright for any type of media',
        title2: 'Films, series, videos and audio',
        bullets: [
            { text: 'Tokenize your content with Blockchain' },
            { text: 'Track your earnings and royalties distribution' },
            { text: 'Get transparent contracts with your coworkers' },
        ],
        title3: 'Features',
        features: [
            { title: 'Enables collaboration', text: 'Create customized contracts with all project stakeholders' },
            { title: 'Creates transparency', text: 'Provide access to verify all transactions and payment splits' },
            { title: 'Offers legal support', text: 'Get help to upload your content in various plataforms' },
            { title: 'Genetrates automatic statements', text: 'Get real-time bank statements' },
            { title: 'Gets you paid', text: 'Settle payments directly into your bank account' },
            { title: 'Evaluates performance', text: 'Dashboard with insights and revenue analysis' },
        ],
        title4: 'Our Team',
        team: [
            { name: 'Carlos Júnior', role: 'Blockchain Developer', image: perfilCarlos },
            { name: 'Flávia Firmino', role: 'Business and Innovation', image: perfilFlavia },
            { name: 'Ivo Lavacek', role: 'FullStack Developer', image: perfilIvo },
            { name: 'João Rodrigo', role: 'Blockchain Developer', image: perfilJoao },
        ],
        event: { subtitle1: 'Event', subtitle2: 'Sponsors', image: lumx, imageAlt : 'lumx-hack-logo' },
        sponsors: [
            { image: tanssi },
            { image: chiliz },
            { image: scroll },
            { image: polygon },
            { image: filecoin },
          ],
    } : {
        title1: 'Gerencie direitos autorais para qualquer tipo de mídia',
        title2: 'Filmes, séries, vídeos e áudio',
        bullets: [
            { text: 'Tokenize seu conteúdo com Blockchain' },
            { text: 'Monitore seus ganhos e distribuição de royalties' },
            { text: 'Obtenha contratos transparentes com seus colegas' },
        ],
        title3: 'Funcionalidades',
        features: [
          { title: 'Permite colaboração', text: 'Crie contratos personalizados com todos os interessados no projeto' },
          { title: 'Cria transparência', text: 'Forneça acesso para verificar todas as transações e divisões de pagamentos' },
          { title: 'Oferece suporte jurídico', text: 'Obtenha ajuda para enviar seu conteúdo para várias plataformas' },
          { title: 'Gera declarações automáticas', text: 'Obtenha extratos bancários em tempo real' },
          { title: 'Receba seus pagamentos', text: 'Liquide pagamentos diretamente em sua conta bancária' },
          { title: 'Avalie seu desempenho', text: 'Painel com insights e análise de receita' },
        ],
        title4: 'Nosso time',
        team: [
          { name: 'Carlos Júnior', role: 'Desenvolvedor Blockchain', image: perfilCarlos },
          { name: 'Flávia Firmino', role: 'Negócios e Inovação', image: perfilFlavia },
          { name: 'Ivo Lavacek', role: 'Desenvolvedor FullStack', image: perfilIvo },
          { name: 'João Rodrigo', role: 'Desenvolvedor Blockchain', image: perfilJoao },
        ],
        event: { subtitle1: 'Evento', subtitle2: 'Patrocinadores', image: lumx, imageAlt : 'lumx-hack-logo' },
        sponsors: [
            { image: tanssi },
            { image: chiliz },
            { image: scroll },
            { image: polygon },
            { image: filecoin },
        ],
    };

    return (
        <>
            <div className="div1">
                <div className="container-div1">
                <img src={logo} alt="logo" class="logo-div" />
                <img src={name} alt="name" class="name-div" />
                </div>
                <div className="text1">{text.title1}</div>
                <div className="text2">{text.title2}</div>
                <div className="bullets">
                    {text.bullets.map((bullet, index) => (
                        <div className="square" key={index}>
                            <p>{bullet.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="div2">
                <div className="title-div2">{text.title3}</div>
                <div className="features-grid">
                    {text.features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <p className="title">{feature.title}</p>
                        <p className="text">{feature.text}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="div4">
                <div className="title-div4">{text.title4}</div>
                <div className="membros">
                    {text.team.map((member, index) => (
                    <div className="perfil" key={index}>
                        <img src={member.image} alt={`foto-${member.name.replace(/\s/g, '-')}`} className="membro" />
                        <div className="nome-membro">{member.name}</div>
                        <div className="funcao-membro">{member.role}</div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="div3">
                <div className="evento">
                    <div className="subtitle-div3">{text.event.subtitle1}</div>
                    <img src={text.event.image} alt={text.event.imageAlt} className="lumx" />
                </div>

                <div className="patrocinadores">
                    <div className="subtitle-div31">{text.event.subtitle2}</div>
                    <div className="sponsors">
                    {text.sponsors.map((sponsor, index) => (
                        <img src={sponsor.image} alt={`${index + 1}-sponsor`} key={index} className="sponsor" />
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage