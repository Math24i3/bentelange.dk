import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { projects } from '@/data/projects.js';
const route = useRoute();
const slug = route.params.slug;
const project = computed(() => {
    return projects.find(p => p.title.toLowerCase().replaceAll(' ', '-') === slug);
});
const currentSlide = ref(0);
const fullscreen = ref(false);
function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % project.value.images.length;
}
function prevSlide() {
    currentSlide.value =
        (currentSlide.value - 1 + project.value.images.length) %
            project.value.images.length;
}
function toggleFullscreen() {
    fullscreen.value = !fullscreen.value;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['project-text']} */ ;
/** @type {__VLS_StyleScopedClasses['project-text']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.project) {
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        ...{ class: "project-view" },
    });
    if (!__VLS_ctx.fullscreen) {
        // @ts-ignore
        [fullscreen,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "container project-grid" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "project-text" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
        (__VLS_ctx.project.title);
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "location" },
        });
        (__VLS_ctx.project.location);
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "year" },
        });
        (__VLS_ctx.project.year);
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "tags" },
        });
        for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.project.tags))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                key: (tag),
                ...{ class: "tag" },
            });
            (tag);
        }
        __VLS_asFunctionalElement(__VLS_elements.article, __VLS_elements.article)({
            ...{ class: "description" },
        });
        for (const [p, i] of __VLS_getVForSourceType((__VLS_ctx.project.description))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
                key: (i),
            });
            (p);
        }
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "slideshow" },
        });
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.prevSlide) },
            'aria-label': "Forrige billede",
        });
        // @ts-ignore
        [prevSlide,];
        __VLS_asFunctionalElement(__VLS_elements.img)({
            ...{ onClick: (__VLS_ctx.toggleFullscreen) },
            src: (__VLS_ctx.project.images[__VLS_ctx.currentSlide]),
            alt: (`${__VLS_ctx.project.title} billede ${__VLS_ctx.currentSlide + 1}`),
        });
        // @ts-ignore
        [project, project, toggleFullscreen, currentSlide, currentSlide,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.nextSlide) },
            'aria-label': "Næste billede",
        });
        // @ts-ignore
        [nextSlide,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "enlarge-hint" },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "fullscreen-slideshow" },
        });
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.toggleFullscreen) },
            ...{ class: "close-btn" },
        });
        // @ts-ignore
        [toggleFullscreen,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.prevSlide) },
            ...{ class: "prev-btn" },
        });
        // @ts-ignore
        [prevSlide,];
        __VLS_asFunctionalElement(__VLS_elements.img)({
            src: (__VLS_ctx.project.images[__VLS_ctx.currentSlide]),
            alt: (`${__VLS_ctx.project.title} billede ${__VLS_ctx.currentSlide + 1}`),
        });
        // @ts-ignore
        [project, project, currentSlide, currentSlide,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (__VLS_ctx.nextSlide) },
            ...{ class: "next-btn" },
        });
        // @ts-ignore
        [nextSlide,];
    }
}
else {
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        ...{ class: "container" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
/** @type {__VLS_StyleScopedClasses['project-view']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['project-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['project-text']} */ ;
/** @type {__VLS_StyleScopedClasses['location']} */ ;
/** @type {__VLS_StyleScopedClasses['year']} */ ;
/** @type {__VLS_StyleScopedClasses['tags']} */ ;
/** @type {__VLS_StyleScopedClasses['tag']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['enlarge-hint']} */ ;
/** @type {__VLS_StyleScopedClasses['fullscreen-slideshow']} */ ;
/** @type {__VLS_StyleScopedClasses['close-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['prev-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['next-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        project: project,
        currentSlide: currentSlide,
        fullscreen: fullscreen,
        nextSlide: nextSlide,
        prevSlide: prevSlide,
        toggleFullscreen: toggleFullscreen,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
