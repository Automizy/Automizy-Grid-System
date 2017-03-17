define([
    "js/init/init"
], function () {
    var Container = function () {
        var t = this;
        t.d = {
            fluid:true,
            visible: true,
            rowSpacing: 10,
            colPadding: 10
        };

        t.d.$widget = $('<div class="ags-container ags-container-fluid"></div>');

    };

    var p = Container.prototype;

    p.addRow = function(row){
        return this.addRows([row]);
    };
    p.rows = p.addRows = function(rows){
        var t = this;
        var rows = rows || [];
        for(var i = 0; i < rows.length; i++){
            if(rows[i] instanceof $AGS.m.Row){
                rows[i].drawTo(t.d.$widget);
            }else if(typeof rows[i] === 'array' || typeof rows[i] === 'object'){
                $AGS.newCol(rows[i]).drawTo(t.d.$widget);
            }
        }
        return t;
    };
    p.fluid = function(fluid){
        var t = this;
        if (typeof fluid !== 'undefined') {
            t.d.fluid = !!fluid;
            if(t.d.fluid){
                t.widget().addClass('ags-container-fluid');
            }else{
                t.widget().removeClass('ags-container-fluid');
            }
            return t;
        }
        return t.d.fluid;
    };

    p.rowSpacing = function(rowSpace){
        var t = this;
        if(typeof rowSpace !== 'undefined'){
            t.d.$widget.removeClass('ags-rowspace-'+t.d.rowSpacing);
            t.d.rowSpacing = rowSpace;
            t.d.$widget.addClass('ags-rowspace-'+rowSpace);
            return t;
        }
        else return t.d.rowSpacing;

    };
    
    p.colPadding = function(colSpace){
        var t = this;
        if(typeof colSpace !== 'undefined'){
            t.d.$widget.removeClass('ags-colpad-'+t.d.colPadding);
            t.d.colPadding = colSpace;
            t.d.$widget.addClass('ags-colpad-'+colSpace);
            return t;
        }
        else return t.d.colPadding;

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

    $AGS.m.Container = Container;
    $AGS.newContainer = function () {
        return new $AGS.m.Container();
    };

    return $AGS.m.Container;
});