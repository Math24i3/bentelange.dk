const books = [
    {
        title: "Arkitektur for børn",
        year: "2008–2009",
        tags: ["Børn", "Arkitektur"],
        cover: "/src/assets/books/01boeger_boernebog.jpg",
        alt: "Bogserie: Arkitektur for børn"
    },
    {
        title: "Rigtige sommerhuse",
        year: "2010",
        tags: ["Kultur"],
        cover: "/src/assets/books/01boeger_rigtige_sommerhuse.jpg",
        alt: "Rigtige sommerhuse bogomslag"
    },
    {
        title: "Thorvaldsens Museum",
        year: "2002",
        tags: ["Kultur", "Kunst"],
        cover: "/src/assets/books/01boeger_thorvaldsens_museum.jpg",
        alt: "Thorvaldsens Museum bogomslag"
    },
    {
        title: "Bayt al’Aqqad",
        year: "2005",
        tags: ["Kultur"],
        cover: "/src/assets/books/01boeger_baytalaqqad.jpg",
        alt: "Bayt al’Aqqad bogomslag"
    },
    {
        title: "Københavns farver",
        year: "1996–97",
        tags: ["Kultur"],
        cover: "/src/assets/books/01boeger_kobenhavns_farve.jpg",
        alt: "Københavns farver bogomslag"
    },
    {
        title: "Roms farver / The Colours of Rome",
        year: "1993 / 1995",
        tags: ["Kultur"],
        cover: "/src/assets/books/01boeger_roms_farver.jpg",
        alt: "Roms farver bogomslag"
    },
    {
        title: "Et hus i Damaskus",
        year: "2003",
        tags: ["Kultur", "Restaurering"],
        cover: "/src/assets/books/01boeger_husidamaskus.jpg",
        alt: "Et hus i Damaskus bogomslag"
    },
    {
        title: "Den Frie Udstillingsbygning",
        year: "2012",
        tags: ["Kultur", "Kunst"],
        cover: "/src/assets/books/01boeger_den_frie.jpg",
        alt: "Den Frie Udstillingsbygning bogomslag"
    },
    {
        title: "San Cataldo",
        year: "2013",
        tags: ["Restaurering", "Kultur", "Kloster"],
        cover: "/src/assets/books/01boeger_san_cataldo.jpg",
        alt: "San Cataldo bogomslag"
    },
    {
        title: "Marienlyst Slot",
        year: "2013 / 2015",
        tags: ["Restaurering", "Kultur"],
        cover: "/src/assets/books/01boeger_marienlyst_slot.jpg",
        alt: "Marienlyst Slot bogomslag"
    },
    {
        title: "Murede ildsteder",
        year: "2006",
        tags: ["Kultur", "Håndværk"],
        cover: "/src/assets/books/01boeger_murede_ildsteder.jpg",
        alt: "Murede ildsteder bogomslag"
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['books-card']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "books",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid grid-3" },
});
for (const [b] of __VLS_getVForSourceType((__VLS_ctx.books))) {
    // @ts-ignore
    [books,];
    __VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
        key: (b.title),
        ...{ class: "card books-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.figure, __VLS_elements.figure)({
        ...{ class: "thumb" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (b.cover),
        alt: (b.alt || b.title),
        loading: "lazy",
        decoding: "async",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "books-meta" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "books-title" },
    });
    (b.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "books-alt" },
    });
    (b.year);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "tags" },
    });
    for (const [tag] of __VLS_getVForSourceType((b.tags))) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (tag),
            ...{ class: "tag" },
        });
        (tag);
    }
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-3']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['books-card']} */ ;
/** @type {__VLS_StyleScopedClasses['thumb']} */ ;
/** @type {__VLS_StyleScopedClasses['books-meta']} */ ;
/** @type {__VLS_StyleScopedClasses['books-title']} */ ;
/** @type {__VLS_StyleScopedClasses['books-alt']} */ ;
/** @type {__VLS_StyleScopedClasses['tags']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        books: books,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
