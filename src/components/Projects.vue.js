const projects = [
    {
        title: "Det Danske Institut i Rom",
        location: "Rom, Italien",
        tags: ["Restaurering", "Kultur"],
        year: "1964–» (opgradering)",
        cover: "/src/assets/projects/01_danske_institut_i_rom.jpg",
        alt: "Det Danske Institut i Rom – facade"
    },
    {
        title: "San Cataldo",
        location: "Amalfikysten, Italien",
        tags: ["Restaurering", "Kloster"],
        year: "Historisk",
        cover: "/src/assets/projects/01_san_cataldo.jpg",
        alt: "San Cataldo kloster – gårdrum"
    },
    {
        title: "Den Frie Udstillingsbygning",
        location: "København, Danmark",
        tags: ["Kultur", "Restaurering"],
        year: "—",
        cover: "/src/assets/projects/01_den_frie_ udstillingsbygning.jpg",
        alt: "Den Frie Udstillingsbygning – facade"
    },
    {
        title: "Marienlyst Slot",
        location: "Helsingør, Danmark",
        tags: ["Slot", "Restaurering"],
        year: "2013–15",
        cover: "/src/assets/projects/01_marienlyst_slot.jpg",
        alt: "Marienlyst Slot – restaurering"
    },
    {
        title: "Toldbodbygningen",
        location: "København, Danmark",
        tags: ["Bygning", "Restaurering"],
        year: "—",
        cover: "/src/assets/projects/01_toldbodbygningen.jpg",
        alt: "Toldbodbygningen – facade"
    },
    {
        title: "Det Danske Institut i Damaskus",
        location: "Damaskus, Syrien",
        tags: ["Kultur", "Restaurering"],
        year: "—",
        cover: "/src/assets/projects/01_det_danske_hus_i_damaskus.jpg",
        alt: "Det Danske Institut i Damaskus – gård"
    },
    {
        title: "Frederiksborg Slotshave",
        location: "Hillerød, Danmark",
        tags: ["Have", "Restaurering"],
        year: "1997",
        cover: "/src/assets/projects/01_frederiksborg_slotshave.jpeg",
        alt: "Frederiksborg Slotshave – haveanlæg"
    },
    {
        title: "Turebyholm",
        location: "Tureby, Danmark",
        tags: ["Herregård", "Restaurering"],
        year: "2002 (Europa Nostra)",
        cover: "/src/assets/projects/01_turebyholm.jpg",
        alt: "Turebyholm – facade"
    },
    {
        title: "Restaurering af ruin på Amalfikysten",
        location: "Amalfikysten, Italien",
        tags: ["Restaurering", "Ruin"],
        year: "—",
        cover: "/src/assets/projects/projekter_eget_hus_italien.jpg",
        alt: "Restaurering af ruin på Amalfikysten"
    },
    {
        title: "Gammel Holtegaard",
        location: "Holte, Danmark",
        tags: ["Kultur", "Restaurering"],
        year: "—",
        cover: "/src/assets/projects/01_gammel_holdegaard.jpg",
        alt: "Gammel Holtegaard – facade"
    },
    {
        title: "Tuborg Bryghus",
        location: "Hellerup, Danmark",
        tags: ["Industri", "Restaurering", "Kultur"],
        year: "—",
        cover: "/src/assets/projects/01_tuborg_bryghus.jpg",
        alt: "Tuborg Bryghus – facade"
    },
    {
        title: "Privat galleri ved Furesøen",
        location: "Furesø, Danmark",
        tags: ["Galleri", "Renovering"],
        year: "—",
        cover: "/src/assets/projects/01_privat_galleri_furesoen.jpg",
        alt: "Privat galleri ved Furesøen – facade"
    },
    {
        title: "Svaneke Badeklub",
        location: "Bornholm, Danmark",
        tags: ["Kultur", "Nybyggeri"],
        year: "—",
        cover: "/src/assets/projects/01_svaneke_badeklub.jpg",
        alt: "Svaneke Badeklub – facade"
    }
];
import { computed } from 'vue';
const filteredProjects = computed(() => {
    return projects;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['project-title']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "projects",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid grid-3" },
});
for (const [p] of __VLS_getVForSourceType((__VLS_ctx.filteredProjects))) {
    // @ts-ignore
    [filteredProjects,];
    __VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
        key: (p.title),
        ...{ class: "card project-card" },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: (`/projects/${p.title.toLowerCase().replaceAll(' ', '-')}`),
    }));
    const __VLS_2 = __VLS_1({
        to: (`/projects/${p.title.toLowerCase().replaceAll(' ', '-')}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_4 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_elements.figure, __VLS_elements.figure)({
        ...{ class: "thumb" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (p.cover),
        alt: (p.alt || p.title),
        loading: "lazy",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "project-meta" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "project-title" },
    });
    (p.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "project-location" },
    });
    (p.location);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "tags" },
    });
    for (const [tag] of __VLS_getVForSourceType((p.tags))) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (tag),
            ...{ class: "tag" },
        });
        (tag);
    }
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-3']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['project-meta']} */ ;
/** @type {__VLS_StyleScopedClasses['project-title']} */ ;
/** @type {__VLS_StyleScopedClasses['project-location']} */ ;
/** @type {__VLS_StyleScopedClasses['tags']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        filteredProjects: filteredProjects,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
