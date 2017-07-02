/**
 * removeAllSpans -  функция, которая удаляет все элементы span со страницы
 */
function removeAllSpans () {
    var elem = document.getElementsByTagName('span');

    do {
        for (var i = 0; i < elem.length; i++) {
            elem[i].parentNode.removeChild(elem[i]);
        }
    } while (elem.length > 0);

};
removeAllSpans();

/**
 * firstChild -  функция, которая будет кроссбразурено возвращать firstChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function firstChild (parent) {
    var node = parent.firstElementChild;

    return node;
}

/**
 * lastChild -  функция, будет кроссбраузерно возвращать lastChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function lastChild (parent) {
    var node = parent.lastElementChild;

    return node;
}

/**
 * next -  функция, которая будет кроссбраузерно возвращать следующий элемент
 * (не текстовую ноду, работа наподобие next() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function next (node) {
    var node = node.nextElementSibling;

    return node;
}

/**
 * prev -  функция, которая будет кроссбраузерно возвращать предыдущий элемент
 * (не текстовую ноду, работа наподобие prev() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function prev (node) {
    var node = node.previousElementSibling;

    return node;
}

/**
 * OPTIONAL
 * closest -  функция, которая будет идти вверх по DOM (по родительским елементам) от переданного ей элемента в первом
 * аргументе пока не найдет элемент переданный во втором аргументе в эту функцию и вернёт этот элемент (то есть второй).
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 *
 * Example:
 * closest(document.querySelector('[data-url="http://google.ru"]'), 'aside'); // return <aside>...</aside>
 *
 * @param {Node} node
 * @param {String} selector
 * @return {Node}
 */

function closest (node, selector) {
    var node = document.querySelector(node);
    var selector = node.closest(selector);

    return selector;
}