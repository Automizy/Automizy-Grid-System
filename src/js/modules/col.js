define([
    "js/init/init"
], function () {
    var Col = function () {
        var t = this;
        t.d = {
            xs: {
                size: false,
                offset: false,
                pull: false,
                push: false,
                hidden: false
            },
            sm: {
                size: false,
                offset: false,
                pull: false,
                push: false,
                hidden: false
            },
            md: {
                size: false,
                offset: false,
                pull: false,
                push: false,
                hidden: false
            },
            lg: {
                size: false,
                offset: false,
                pull: false,
                push: false,
                hidden: false
            },
            visible: true
        };

        t.d.$widget = $('<div class="ags-col"></div>');

    };

    var p = Col.prototype;

    p.reClassType = function (type) {
        var t = this;
        if (t.d[type].size !== false) {
            t.d.$widget.addClass('ags-col-' + type + ' ags-col-' + type + '-' + t.d[type].size);
        }
        if (t.d[type].offset !== false) {
            t.d.$widget.addClass('ags-col-' + type + ' ags-col-' + type + '-offset-' + t.d[type].offset);
        }
        if (t.d[type].pull !== false) {
            t.d.$widget.addClass('ags-col-' + type + ' ags-col-' + type + '-pull-' + t.d[type].pull);
        }
        if (t.d[type].push !== false) {
            t.d.$widget.addClass('ags-col-' + type + ' ags-col-' + type + '-push-' + t.d[type].push);
        }
        if (t.d[type].hidden !== false) {
            t.d.$widget.addClass('ags-col-' + type + ' ags-col-hidden-' + type);
        }
        return t;
    };

    p.reClass = function () {
        var t = this;
        t.d.$widget.removeClass(function (index, css) {
            return (css.match(/(^|\s)ags-col-\S+/g) || []).join(' ');
        });

        t.reClassType('xs');
        t.reClassType('sm');
        t.reClassType('md');
        t.reClassType('lg');

        return t;
    };

    p.xs = p.extraSmall = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            if (typeof value === 'object' || typeof value === 'array') {
                if (typeof value.size !== 'undefined') {
                    t.d.xs.size = parseInt(value.size);
                }
                if (typeof value.offset !== 'undefined') {
                    t.d.xs.offset = parseInt(value.offset);
                }
                if (typeof value.pull !== 'undefined') {
                    t.d.xs.pull = parseInt(value.pull);
                }
                if (typeof value.push !== 'undefined') {
                    t.d.xs.push = parseInt(value.push);
                }
                if (typeof value.hidden !== 'undefined') {
                    t.d.xs.hidden = !!value.hidden;
                }
            } else {
                t.d.xs.size = value;
            }
            t.reClass();
            return t;
        }
        return t.d.xs;
    };
    p.sm = p.small = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            if (typeof value === 'object' || typeof value === 'array') {
                if (typeof value.size !== 'undefined') {
                    t.d.sm.size = parseInt(value.size);
                }
                if (typeof value.offset !== 'undefined') {
                    t.d.sm.offset = parseInt(value.offset);
                }
                if (typeof value.pull !== 'undefined') {
                    t.d.sm.pull = parseInt(value.pull);
                }
                if (typeof value.push !== 'undefined') {
                    t.d.sm.push = parseInt(value.push);
                }
                if (typeof value.hidden !== 'undefined') {
                    t.d.sm.hidden = !!value.hidden;
                }
            } else {
                t.d.sm.size = value;
            }
            t.reClass();
            return t;
        }
        return t.d.sm;
    };
    p.md = p.medium = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            if (typeof value === 'object' || typeof value === 'array') {
                if (typeof value.size !== 'undefined') {
                    t.d.md.size = parseInt(value.size);
                }
                if (typeof value.offset !== 'undefined') {
                    t.d.md.offset = parseInt(value.offset);
                }
                if (typeof value.pull !== 'undefined') {
                    t.d.md.pull = parseInt(value.pull);
                }
                if (typeof value.push !== 'undefined') {
                    t.d.md.push = parseInt(value.push);
                }
                if (typeof value.hidden !== 'undefined') {
                    t.d.md.hidden = !!value.hidden;
                }
            } else {
                t.d.md.size = value;
            }
            t.reClass();
            return t;
        }
        return t.d.md;
    };
    p.lg = p.large = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            if (typeof value === 'object' || typeof value === 'array') {
                if (typeof value.size !== 'undefined') {
                    t.d.lg.size = parseInt(value.size);
                }
                if (typeof value.offset !== 'undefined') {
                    t.d.lg.offset = parseInt(value.offset);
                }
                if (typeof value.pull !== 'undefined') {
                    t.d.lg.pull = parseInt(value.pull);
                }
                if (typeof value.push !== 'undefined') {
                    t.d.lg.push = parseInt(value.push);
                }
                if (typeof value.hidden !== 'undefined') {
                    t.d.lg.hidden = !!value.hidden;
                }
            } else {
                t.d.lg.size = value;
            }
            t.reClass();
            return t;
        }
        return t.d.lg;
    };

    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            if (t.d.$widget.contents() instanceof jQuery) {
                t.d.$widget.contents().appendTo($AGS.$tmp);
            }
            t.d.$widget.empty();
            t.d.content = content;
            if (t.d.content instanceof jQuery) {
                t.d.content.appendTo(t.d.$widget);
            } else if(typeof t.d.content.drawTo === 'function') {
                t.d.content.drawTo(t.d.$widget);
            } else {
                t.d.$widget.html(t.d.content);
            }
            return t;
        }
        return t.d.content;
    };
    p.margin = function (margin) {
        var t = this;
        if(typeof margin !== 'undefined'){
            t.d.margin = margin;
            t.widget().css('margin', t.d.margin);
            return t;
        }
        return t.d.margin;
    };
    p.widget = function () {
        return this.d.$widget;
    };
    p.draw = p.drawTo = function (target) {
        var t = this;
        var target = target || $('body').eq(0);
        if(typeof target.widget === 'function') {
            t.d.$widget.appendTo(target.widget());
        } else{
            t.d.$widget.appendTo(target);
        }
        return t;
    };


    p.visible = function (visible) {
        var t = this;

        if (typeof visible !== 'undefined'){
            var visible = !!visible;
            t.d.visible = visible;

            if(visible){
                t.show();
            }
            else{
                t.hide();
            }
            return t;
        }
        return t.d.visible;
    };

    p.hide = function () {
        var t = this;
        t.d.$widget.addClass('automizy-hide');
    };

    p.show = function () {
        var t = this;
        t.d.$widget.removeClass('automizy-hide');
    };

    $AGS.m.Col = Col;
    $AGS.newCol = function () {
        return new $AGS.m.Col();
    };

    return $AGS.m.Col;
});