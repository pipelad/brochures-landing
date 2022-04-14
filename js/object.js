// centrar solo el último programa
function centerLast() {
	const progs = document.querySelectorAll('.prog-link'),
	  	  numProgs = progs.length,
	  	  residuoProgs = numProgs % 3;

	if (residuoProgs === 1) {
		const index = numProgs - 1;
		progs[index].classList.add('ultimo-prog');
		//console.log(residuoProgs);
	} 
	
}


//INFORMATION
const pregrado = [
  {
    name: "Administración de Empresas* (D/N)",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/administracion_de_empresas.pdf"
  },
  {
    name: "Comunicación Social*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/comunicacion_social.pdf"
  },
  {
    name: "Contaduría Pública*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/contaduria_publica.pdf"
  },
  {
    name: "Cultura Física, Deporte y Recreación*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/cultura_fisica_deporte_y_recreacion.pdf"
  },
  {
    name: "Derecho*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/derecho.pdf"
  },
  {
    name: "Diseño Gráfico",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/diseno_grafico.pdf"
  },
  {
    name: "Economía*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/economia.pdf"
  },
  {
    name: "Estadística (D/N)",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/estadistica.pdf"
  },
  {
    name: "Gobierno y Relaciones Internacionales",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/gobierno_y_relaciones_internacionales.pdf"
  },
  {
    name: "Ingeniería Ambiental*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_ambiental.pdf"
  },
  {
    name: "Ingeniería Civil*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_civil.pdf"
  },
  {
    name: "Ingeniería de Telecomunicaciones*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_de_telecomunicaciones.pdf"
  },
  {
    name: "Ingeniería Electrónica*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_electronica.pdf"
  },
  {
    name: "Ingeniería Industrial",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_industrial.pdf"
  },
  {
    name: "Ingeniería Mecánica",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/ingenieria_mecanica.pdf"
  },
  {
    name: "Licenciatura en Filosofía y Letras*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/licenciatura_en_filosofia_y_letras.pdf"
  },
  {
    name: "Mercadeo (D/N)",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/mercadeo.pdf"
  },
  {
    name: "Negocios Internacionales* (D/N)",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/negocios_internacionales.pdf"
  },
  {
    name: "Psicología*",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/psicologia.pdf"
  },
  {
    name: "Sociología",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/sociologia.pdf"
  },
  {
    name: "Teología",
    modalidad: "presencial",
    link: "pdf/pregrados-presencial/teologia.pdf"
  },
  {
    name: "Administración Ambiental y de los Recursos Naturales",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/administracion_ambiental_y_de_los_recursos_naturales.pdf"
  },
  {
    name: "Administración de Empresas",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/administracion_de_empresas.pdf"
  },
  {
    name: "Construcción en Arquitectura e Ingeniería",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/construccion_en_arquitectura_e_ingenieria.pdf"
  },
  {
    name: "Ingeniería en Informática",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/ingenieria_en_informatica.pdf"
  },
  {
    name: "Ingeniería en Logística y Operaciones",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/ingenieria_en_logistica_y_operaciones.pdf"
  },
  {
    name: "Licenciatura en Artes Plásticas",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_artes_plasticas.pdf"
  },
  {
    name: "Licenciatura en Biología*",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_biologia.pdf"
  },
  {
    name: "Licenciatura en Educación Infantil*",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_educacion_infantil.pdf"
  },
  {
    name: "Licenciatura en Educación Religiosa*",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_educacion_religiosa.pdf"
  },
  {
    name: "Licenciatura en Lenguas Extranjeras Inglés",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_lenguas_extranjeras_ingles.pdf"
  },
  {
    name: "Licenciatura en Teología",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/lic_teologia.pdf"
  },
  {
    name: "Zootecnia",
    modalidad: "distancia",
    link: "pdf/pregrados-distancia/zootecnia.pdf"
  }
]

const posgrado = [
  {
    name: "Doctorado en Derecho",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/doctorado_en_derecho.pdf"
  },
  {
    name: "Doctorado en Filosofía",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/doctorado_en_filosofia.pdf"
  },
  {
    name: "Doctorado en Psicología",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/doctorado_en_psicologia.pdf"
  },
  {
    name: "Especialización en Auditoría de Salud",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_auditoria_de_salud.pdf"
  },
  {
    name: "Especialización en Auditoría de Sistemas",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_auditoria_de_sistemas.pdf"
  },
  {
    name: "Especialización en Auditoría y Administración de la Información Tributaria",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_auditoria_y_administracion_de_la_informacion_tributaria.pdf"
  },
  {
    name: "Especialización en Defensa de los Derechos Humanos",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_defensa_de_los_derechos_humanos.pdf"
  },
  {
    name: "Especialización en Derecho Administrativo",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_derecho_administrativo.pdf"
  },
  {
    name: "Especialización en Derecho Penal",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_derecho_penal.pdf"
  },
  {
    name: "Especialización en Dirección y Gestión de la Calidad (en convenio con ICONTEC)",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_direccion_y_gestion_de_la_calidad.pdf"
  },
  {
    name: "Especialización en Finanzas",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_finanzas.pdf"
  },
  {
    name: "Especialización en Gerencia de Instituciones de Seguridad Social en Salud",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gerencia_de_instituciones_de_seguridad.pdf"
  },
  {
    name: "Especialización en Gerencia de Multimedia y Comunicación Digital",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gerencia_de_multimedia_y_comunicacion_digital.pdf"
  },
  {
    name: "Especialización en Gerencia de Negocios Internacionales",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gerencia_de_negocios_internacionales.pdf"
  },
  {
    name: "Especialización en Gerencia Empresarial",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gerencia_empresarial.pdf"
  },
  {
    name: "Especialización en Gestión de Servicios de Tecnologías de la Información",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gestion_de_servicios_de_tecnologia_de_la_informacion.pdf"
  },
  {
    name: "Especialización en Gestión Territorial y Avalúos",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_gestion_territorial_de_avaluos.pdf"
  },
  {
    name: "Especialización en Psicología Jurídica y Forense",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/especializacion_en_psicologia_juridica_y_forense.pdf"
  },
  {
    name: "Maestría en Actividad Física para la Salud",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_actividad_fisica_para_la_salud.pdf"
  },
  {
    name: "Maestría en Administración - MBA",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_administracion_mba.pdf"
  },
  {
    name: "Maestría en Calidad y Gestión Integral (en convenio con ICONTEC)",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_calidad_y_gestion_integral.pdf"
  },
  {
    name: "Maestría en Ciencias Económicas",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_ciencias_economicas.pdf"
  },
  {
    name: "Maestría en Comunicación, Desarrollo y Cambio Social",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_comunicacion_desarrollo_y_cambio_social.pdf"
  },
  {
    name: "Maestría en Defensa de los Derechos Humanos y el DIH ante Organismos, Tribunales y Cortes Internacionales",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_defensa_de_los_derechos_humanos_y_el_derecho_internacional_humanitario.pdf"
  },
  {
    name: "Maestría en Derecho Comercial y Financiero",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_derecho_comercial_y_financiero.pdf"
  },
  {
    name: "Maestría en Derecho Contractual Público y Privado",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_derecho_contractual_publico_y_privado.pdf"
  },
  {
    name: "Maestría en Derecho Penal*",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_derecho_penal.pdf"
  },
  {
    name: "Maestría en Derecho Público",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_derecho_publico.pdf"
  },
  {
    name: "Maestría en Estadística Aplicada",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_estadistica_aplicada.pdf"
  },
  {
    name: "Maestría en Filosofía Latinoamericana*",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_filosofia_latinoamericana.pdf"
  },
  {
    name: "Maestría en Gestión del Talento Humano",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_gestion_del_talento_humano.pdf"
  },
  {
    name: "Maestría en Gobierno y Relaciones Internacionales",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_gobierno_y_relaciones_internacionales.pdf"
  },
  {
    name: "Maestría en Infraestructura Víal",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_infraestructura_vial.pdf"
  },
  {
    name: "Maestría en Ingeniería Electrónica",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_ingenieria_electronica.pdf"
  },
  {
    name: "Maestría en Planeación para el Desarrollo",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_planeacion_para_el_desarrollo.pdf"
  },
  {
    name: "Maestría en Psicología Clínica y de la Familia*",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_psicologia_clinica_y_de_la_familia.pdf"
  },
  {
    name: "Maestría en Psicología Jurídica",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_psicologia_juridica.pdf"
  },
  {
    name: "Maestría en Tecnologías Limpias",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_tecnologias_limpias.pdf"
  },
  {
    name: "Maestría en Telecomunicaciones y Regulación TIC",
    modalidad: "presencial",
    link: "pdf/posgrados-presencial/maestria_en_telecomunicaciones_y_regulacion_tic.pdf"
  },
  {
    name: "Doctorado en Educación",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/doctorado_en_educacion.pdf"
  },
  {
    name: "Especialización en Gerencia de Empresas Agropecuarias",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/especializacion_en_gerencia_empresas_agropecuarias.pdf"
  },
  {
    name: "Especialización en Gestión Integral de Cuencas Hidrográficas - 100% Virtual",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/especializacion_en_gestion_integral_de_cuencas_hidrograficas.pdf"
  },
  {
    name: "Especialización en Gestión para el Desarrollo Empresarial",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/especializacion_en_gestion_para_el_desarrollo_empresarial.pdf"
  },
  {
    name: "Especialización en Patología de la Construcción",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/especializacion_en_patologia_de_la_construccion.pdf"
  },
  {
    name: "Especialización en Pedagogía para la Educación Superior",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/especializacion_pedagogia_para__la_educacion_superior.pdf"
  },
  {
    name: "Maestría en Ambientes Bilingües de Aprendizaje - 100% Virtual",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/maestria_en_ambientes_bilingues_de_aprendizaje.pdf"
  },
  {
    name: "Maestría en Didáctica",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/maestria_en_didactica.pdf"
  },
  {
    name: "Maestría en Educación*",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/maestria_en_educacion.pdf"
  },
  {
    name: "Maestría en Gestión de Cuencas Hidrográficas",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/maestría_en_gestion_de_cuencas_hidrograficas.pdf"
  },
  {
    name: "Maestría en Gestión y Evaluación Educativa",
    modalidad: "distancia",
    link: "pdf/posgrados-distancia/maestria_gestion_y_evaluacion_educativa.pdf"
  }
]

// Constantes y lets
const introOverlay = document.querySelector('#type-overlay'),
	    brochureArea = document.querySelector('#brochures'),
      brochureAreaDistancia = document.querySelector('#brochures-distancia'),
	    brochureFilter = document.querySelector('#brochure-filter'),
	    cambioProgs = document.querySelector('#botones-presencial');

let brochures,
    i = 0;

const renderBrochures = (itemsArr) => {
	brochureArea.innerHTML = '';
	brochureAreaDistancia.innerHTML = '';
	itemsArr.forEach(el => {
		if(el.modalidad === "presencial") {
			brochureArea.insertAdjacentHTML('beforeend', `<a target="_blank" class="prog-link" href="${el.link}">${el.name}</a>`)
		} else {
			brochureAreaDistancia.insertAdjacentHTML('beforeend', `<a target="_blank" class="prog-link" href="${el.link}">${el.name}</a>`)
		}
		
	})
	centerLast();
}	

const popular = (tipo, arr) => {
	tipo === 'intro' ? introOverlay.classList.add('hidden') : '';
	brochures = arr.slice();
	renderBrochures(brochures);
}

const changeArrow = () => {
  if(i === 3) {
    i = 0;
  }
  const element = `.stanim${i}`;
  i++
  const currentArrow = document.querySelectorAll(element);
  currentArrow.forEach(el => {
    el.classList.add('active--svg');
    setTimeout(() => {el.classList.remove('active--svg')}, 300);
  })
}


introOverlay.addEventListener('click', event => {
	if(event.target.dataset.id === 'pre') {
		popular('intro', pregrado);
		document.querySelector('#preg-btn').classList.add('activo');
	}
	if(event.target.dataset.id === 'pos') {
		popular('intro', posgrado);
		document.querySelector('#prog-btn').classList.add('activo');
	}
  document.querySelector('#buscador').classList.add('active');
  setInterval(changeArrow, 600)
})

cambioProgs.addEventListener('click', event => {
	if(event.target.dataset.id === 'pre') {
		const other = cambioProgs.querySelector('#prog-btn');
		if(other.classList.contains('activo')) {
			other.classList.remove('activo');
			event.target.classList.add('activo');
			popular('_', pregrado);
			brochureFilter.value = '';
		} else {
			return
		}
		
	}
	if(event.target.dataset.id === 'pos') {
		const other = cambioProgs.querySelector('#preg-btn');
		if(other.classList.contains('activo')) {
			other.classList.remove('activo');
			event.target.classList.add('activo');
			popular('_', posgrado);
			brochureFilter.value = '';
		} else {
			return
		}
	}
})

let filteredBrochures

brochureFilter.addEventListener('input', (event) => {
	const compareString = item => {
		const inputFilter = event.target.value.toLowerCase();
		const itemName = item.name.toLowerCase();
		return itemName.includes(inputFilter);
	}

	filteredBrochures = brochures.filter(el => compareString(el));
	renderBrochures(filteredBrochures);
	//console.log(filteredBrochures);
})



