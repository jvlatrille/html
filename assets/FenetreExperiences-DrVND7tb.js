import{_ as h,c as o,o as l,b as e,t as n,n as c,d,F as p,r as u,e as m}from"./index-BeNA2bu1.js";const g={name:"FenetreExperiences",data(){return{dossierActif:"Expériences",fichierSelectionne:null,data:{Expériences:[{nom:"Addimadour_Alternance.job",date:"09/2025 - 09/2026",type:"Alternance",icon:"🏭",title:"Alternance Informatique",subtitle:"ADDIMADOUR - Bayonne",description:`
              <p><strong>En cours</strong></p>
              <p>Stage et alternance d'informatique au sein de la plateforme technologique.</p>
            `,tags:["Alternance","Industrie","Dev"]},{nom:"Orangerie_Ete_2025.job",date:"07/2025 - 09/2025",type:"Job d'été",icon:"📦",title:"Préparateur de commandes",subtitle:"L’ORANGERIE PRIMEURS - Anglet",description:`
              <ul>
                <li>Tenir des délais.</li>
                <li>Respecter des exigences pour des clients.</li>
                <li>Autonomie.</li>
              </ul>
            `,tags:["Logistique","Autonomie","Client"]},{nom:"Orangerie_Ete_2024.job",date:"07/2024 - 09/2024",type:"Job d'été",icon:"📦",title:"Préparateur de commandes",subtitle:"L’ORANGERIE PRIMEURS - Anglet",description:`
              <ul>
                <li>Travail de nuit.</li>
                <li>Rigueur.</li>
                <li>Discipline.</li>
              </ul>
            `,tags:["Nuit","Rigueur","Discipline"]},{nom:"Compositadour_Stage.job",date:"04/2025 - 06/2025",type:"Stage",icon:"💻",title:"Stage Informatique",subtitle:"COMPOSITADOUR - Bayonne",description:`
              <p>Stage technique de fin de 2ème année.</p>
              <ul>
                <li>Travail sur SQL, ADO/DAO, PL/SQL.</li>
                <li>Technologies Graphi (GraphQL).</li>
                <li>Développement d'outils de production.</li>
              </ul>
            `,tags:["SQL","PL/SQL","GraphQL"]},{nom:"Nobatek_Stage.stage",date:"01/2020",type:"Stage 3ème",icon:"🏗️",title:"Stage d’observation",subtitle:"NOBATEK - Anglet",description:`
              <ul>
                <li>Transition énergétique.</li>
                <li>Modélisation 3D.</li>
                <li>Travail d'équipe.</li>
                <li>Travail en entreprise.</li>
              </ul>
            `,tags:["3D","Énergie","Observation"]}],Formations:[{nom:"BUT_Informatique.edu",date:"2023 - 2026",type:"Diplôme",icon:"🎓",title:"BUT Informatique",subtitle:"IUT de Bayonne et du Pays Basque",description:`
              <p><strong>Parcours D :</strong> Déploiement d’applications communicantes et sécurisées.</p>
              <p>Cycle de vie logiciel, administration système et réseau, développement web.</p>
            `,tags:["Bac+3","Informatique"]},{nom:"BAC_General.edu",date:"2023",type:"Diplôme",icon:"📜",title:"BAC Général",subtitle:"Lycée René Cassin",description:`
              <p><strong>Mention Bien</strong></p>
              <ul>
                <li>Spécialités : Mathématiques et NSI.</li>
                <li>Options : Maths expertes, Chinois.</li>
              </ul>
            `,tags:["Maths","NSI","Mention Bien"]}]}}},computed:{contenuDossier(){return this.data[this.dossierActif]||[]}},methods:{changerDossier(a){this.dossierActif=a,this.fichierSelectionne=null},selectionnerFichier(a){this.fichierSelectionne=a}},mounted(){this.contenuDossier.length>0&&(this.fichierSelectionne=this.contenuDossier[0])}},_={class:"explorer-window"},f={class:"explorer-header"},b={class:"address-bar"},S={class:"path"},y={class:"explorer-body"},A={class:"explorer-sidebar"},D={class:"sidebar-group"},x={class:"sidebar-list"},E={class:"explorer-main"},C={class:"file-list"},I=["onClick"],T={class:"col-name"},B={class:"file-icon"},L={class:"file-name-text"},R={class:"col-date"},k={class:"col-type"},q={key:0,class:"explorer-preview"},O={class:"preview-icon-large"},w={class:"preview-title"},M={class:"preview-subtitle"},P={class:"preview-details"},N=["innerHTML"],F={key:0,class:"preview-tags"},G={key:1,class:"explorer-preview empty"},U={class:"explorer-statusbar"},Q={key:0};function j(a,i,J,V,s,r){return l(),o("div",_,[e("div",f,[i[3]||(i[3]=e("div",{class:"nav-buttons"},[e("button",{class:"nav-btn",title:"Précédent"},"←"),e("button",{class:"nav-btn",title:"Suivant"},"→"),e("button",{class:"nav-btn",title:"Dossier parent"},"↑")],-1)),e("div",b,[i[2]||(i[2]=e("span",{class:"icon-folder"},"📁",-1)),e("span",S,"Ce PC > Jules > "+n(s.dossierActif),1)]),i[4]||(i[4]=e("div",{class:"search-bar"},[e("span",null,"🔍"),e("span",{class:"placeholder"},"Rechercher...")],-1))]),e("div",y,[e("aside",A,[e("div",D,[i[7]||(i[7]=e("div",{class:"group-title"},"Accès rapide",-1)),e("ul",x,[e("li",{class:c({active:s.dossierActif==="Expériences"}),onClick:i[0]||(i[0]=t=>r.changerDossier("Expériences"))},[...i[5]||(i[5]=[d(" 📁 ",-1),e("span",{class:"folder-name"},"Expériences",-1)])],2),e("li",{class:c({active:s.dossierActif==="Formations"}),onClick:i[1]||(i[1]=t=>r.changerDossier("Formations"))},[...i[6]||(i[6]=[d(" 🎓 ",-1),e("span",{class:"folder-name"},"Formations",-1)])],2)])])]),e("div",E,[i[8]||(i[8]=e("div",{class:"file-header"},[e("div",{class:"col-name"},"Nom"),e("div",{class:"col-date"},"Période"),e("div",{class:"col-type"},"Type")],-1)),e("div",C,[(l(!0),o(p,null,u(r.contenuDossier,(t,v)=>(l(),o("div",{key:v,class:c(["file-item",{selected:t===s.fichierSelectionne}]),onClick:z=>r.selectionnerFichier(t)},[e("div",T,[e("span",B,n(t.icon),1),e("span",L,n(t.nom),1)]),e("div",R,n(t.date),1),e("div",k,n(t.type),1)],10,I))),128))])]),s.fichierSelectionne?(l(),o("aside",q,[e("div",O,n(s.fichierSelectionne.icon),1),e("h2",w,n(s.fichierSelectionne.title),1),e("h3",M,n(s.fichierSelectionne.subtitle),1),i[9]||(i[9]=e("div",{class:"preview-divider"},null,-1)),e("div",P,[e("div",{class:"preview-desc",innerHTML:s.fichierSelectionne.description},null,8,N),s.fichierSelectionne.tags?(l(),o("div",F,[(l(!0),o(p,null,u(s.fichierSelectionne.tags,t=>(l(),o("span",{key:t,class:"tag"},n(t),1))),128))])):m("",!0)])])):(l(),o("aside",G,[...i[10]||(i[10]=[e("p",null,"Sélectionnez un fichier.",-1)])]))]),e("div",U,[e("span",null,n(r.contenuDossier.length)+" élément(s)",1),i[11]||(i[11]=e("span",{class:"separator"},"|",-1)),s.fichierSelectionne?(l(),o("span",Q,"1 élément sélectionné")):m("",!0)])])}const K=h(g,[["render",j],["__scopeId","data-v-dc18214a"]]);export{K as default};
