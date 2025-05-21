(function ($) {
    "use strict";

    /**
     * Generate an indented list of links from a nav. Meant for use with panel().
     * @return {jQuery} jQuery object.
     */
    $.fn.navList = function () {
        var $this = $(this),
            $a = $this.find("a"),
            b = [];

        $a.each(function () {
            var $this = $(this),
                indent = Math.max(0, $this.parents("li").length - 1),
                href = $this.attr("href"),
                target = $this.attr("target");

            b.push(
                '<a class="link depth-' + indent + '"' +
                    (target ? ' target="' + target + '"' : "") +
                    (href ? ' href="' + href + '"' : "") +
                    ">" +
                    '<span class="indent-' + indent + '"></span>' +
                    $this.text() +
                    "</a>"
            );
        });

        return b.join("");
    };

    /**
     * Panel-ify an element.
     * @param {object} userConfig User config.
     * @return {jQuery} jQuery object.
     */
    $.fn.panel = function (userConfig) {
        if (this.length === 0) return this;
        if (this.length > 1) {
            this.each(function () {
                $(this).panel(userConfig);
            });
            return this;
        }

        var $this = $(this),
            $body = $("body"),
            config = $.extend(
                {
                    delay: 0,
                    hideOnClick: false,
                    hideOnEscape: false,
                    hideOnSwipe: false,
                    resetScroll: false,
                    resetForms: false,
                    side: null,
                    target: $this,
                    visibleClass: "visible",
                },
                userConfig
            );

        if (!(config.target instanceof jQuery)) config.target = $(config.target);

        $this._hide = function (event) {
            if (!config.target.hasClass
