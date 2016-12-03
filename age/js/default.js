!function(a, b) {
    a.df = {
        temporary:null,
        $id:b.querySelector(".wrap"),
        $head:b.querySelector("header"),
        $box:b.querySelectorAll(".isrule"),
        pg:[ 0, 0 ],
        offtop:[],
        offset:0,
        len:0,
        em:0,
        wide:!1,
        nowPage:0,
        oldPage:0,
        isAni:!1,
        music:$("#music"),
        mob:/Mobile|Browser/i.test(navigator.userAgent),
        hdapp:/HAODOU|RECIPE/i.test(navigator.userAgent),
        ready:function(b) {
            $(a).load(function() {
                setTimeout(function() {
                    "function" === $.type(b) && b();
                }, 350);
            });
        },
        size:function() {
            setTimeout(function() {
                var c, d, e = (b.querySelector("html"), b.querySelector("body")), f = 90 == Math.abs(a.orientation), g = "undefined" == typeof a.orientation;
                if (df.pg[0] = a.innerWidth, df.pg[1] = a.innerHeight, df.mob && !f && df.pg[1] != a.innerHeight && (df.pg[1] = a.innerHeight), 
                df.mob && f || g && 1.2 * df.pg[0] > df.pg[1]) return df.wide = !0, df.$id.style.height = 0, 
                df.$id.style.minHeight = 0, e.classList.add("cross"), void 0;
                for (df.wide = !1, e.classList.remove("cross"), df.$id.style.height = "auto", df.$id.style.minHeight = df.pg[1] + "px", 
                df.pg[0] > 640 && (df.pg[0] = 640), c = df.em = df.pg[0] / 32, em_basic != c && (b.querySelector("html").style.fontSize = c + "px", 
                em_basic = c), b.querySelector("header").style.display = "block", df.offset = Math.ceil(4.4 * df.em), 
                df.len = df.$box.length, d = 0; d < df.len; d++) df.offtop.push(df.$box[d].offsetTop - df.offset);
            }, 100);
        },
        init:function() {
            df.size();
            var c = b.querySelector("#loading");
            c.style.display = "none", a.addEventListener("resize", function() {
                df.size();
            }, !0), $(".btn").each(function() {
                var a = !1;
                this.addEventListener("touchstart", function() {
                    a = !1;
                }, !1, !1), this.addEventListener("touchmove", function() {
                    a = !0;
                }, !1, !1), this.addEventListener("touchend", function(b) {
                    if (b.preventDefault(), a) return a = !1, void 0;
                    var c = $(this).attr("id");
                    switch (c) {
                      case "startBtn":
                        df.show(2);
                        break;

                      case "measureBtn":
                        if($('#ifrom').find('.mytxt').eq(0).val()=='' || $('#ifrom').find('.mytxt').eq(1).val()=='' || $('#ifrom').find('.mytxt').eq(2).val()=='' || $('#ifrom').find('.mytxt').eq(3).val()=='' || $('#ifrom').find('.mytxt').eq(4).val()=='' || $('#ifrom').find('.mytxt').eq(5).val()==''){
                            popup.alert("表单为空,请填充数据!");return;
                        }else if( $('#ifrom').find('.mytxt').eq(2).val()>150 || !/^[0-9]*$/.test($('#ifrom').find('.mytxt').eq(2).val()) || !/^(0|[1-9][0-9]*)$/.test($('#ifrom').find('.mytxt').eq(2).val()) ){
                            popup.alert("宝宝身高有误,请重新输入!");return;
                        }else if( $('#ifrom').find('.mytxt').eq(3).val()>50 || !/^[0-9]*$/.test($('#ifrom').find('.mytxt').eq(3).val()) || !/^(0|[1-9][0-9]*)$/.test($('#ifrom').find('.mytxt').eq(3).val()) ){
                            popup.alert("宝宝体重有误,请重新输入!");return;
                        }else if( $('#ifrom').find('.mytxt').eq(4).val()>300 || !/^[0-9]*$/.test($('#ifrom').find('.mytxt').eq(4).val()) || !/^(0|[1-9][0-9]*)$/.test($('#ifrom').find('.mytxt').eq(4).val()) ){
                            popup.alert("爸爸身高有误,请重新输入!");return;
                        }else if( $('#ifrom').find('.mytxt').eq(5).val()>300 || !/^[0-9]*$/.test($('#ifrom').find('.mytxt').eq(5).val()) || !/^(0|[1-9][0-9]*)$/.test($('#ifrom').find('.mytxt').eq(5).val()) ){
                            popup.alert("妈妈身高有误,请重新输入!");return;
                        }
						//通过验证后ajax调用数据
                        key.send();
return false;						
                        df.show(3);
                        break;

                      case "seeBtn":
                        df.show(4);
                        break;

                      case "drawBtn":
                        df.show(5);
                    }
                }, !1, !1);
            }), a.addEventListener("touchstart", this, !1), a.addEventListener("touchmove", this, !1), 
            a.addEventListener("touchend", this, !1), a.addEventListener("orientationchange", this, !1), 
            this.show(1);
        },
        verify:function(a, b, c, d) {
            var e, f, g, h, i;
            0 != d && (d = !0, e = c || 60, f = a.attr("class"), g = 1 == a.is("input") ? a.val() :a.text(), 
            h = "秒重新获取", b && "string" == typeof b && a.attr("class", b), 1 == a.is("input") ? a.val(e + h) :a.text(e + h), 
            i = setInterval(function() {
                return e--, 0 >= e ? (f ? a.attr("class", f) :a.attr("class", ""), 1 == a.is("input") ? a.val(g) :a.text(g), 
                d = !1, clearInterval(i), void 0) :(1 == a.is("input") ? a.val(e + h) :a.text(e + h), 
                void 0);
            }, 1e3));
        },
        dateData:function(a, b) {
            function c(a) {
                var b, c = [];
                for (b = a - 100; a + 100 >= b; b++) c.push({
                    id:b + "",
                    value:b + "年"
                });
                return c;
            }
            function d() {
                var a, b = [];
                for (a = 1; 12 >= a; a++) b.push({
                    id:a + "",
                    value:a + "月"
                });
                return b;
            }
            function e(a) {
                var b, c = [];
                for (b = 1; a >= b; b++) c.push({
                    id:b + "",
                    value:b + "日"
                });
                return c;
            }
            var f, g, h, i = $(a), j = new Date(), k = j.getFullYear(), l = j.getMonth() + 1, m = j.getDate();
            i.attr("data-year", k), i.attr("data-month", l), i.attr("data-date", m), f = c(k), 
            g = function() {
                return d();
            }, h = function(a, b) {
                if (/^1|3|5|7|8|10|12$/.test(b)) return e(31);
                if (/^4|6|9|11$/.test(b)) return e(30);
                if (/^2$/.test(b)) return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400 ? e(29) :e(28);
                throw new Error("month is illegal");
            }, i.bind("click", function() {
                var a = i.attr("data-year"), c = i.attr("data-month"), d = i.attr("data-date");
                new IosSelect(3, [ f, g, h ], {
                    title:"",
                    itemHeight:35,
                    oneTwoRelation:1,
                    twoThreeRelation:1,
                    oneLevelId:a,
                    twoLevelId:c,
                    threeLevelId:d,
                    callback:function(a, c, d) {
                        i.attr("data-year", a.id), i.attr("data-month", c.id), i.attr("data-date", d.id), 
                        i.val(a.value + " " + c.value + " " + d.value), "function" === $.type(b) && b();
                    }
                });
            });
        },
        sexData:function(a, b) {
            var c = [ {
                id:"110000",
                value:"男",
                parentId:"0"
            }, {
                id:"120000",
                value:"女",
                parentId:"0"
            } ], d = $(a);
            d.bind("click", function() {
                var a = d.attr("data-sex");
                new IosSelect(1, [ c ], {
                    title:"",
                    itemHeight:35,
                    oneTwoRelation:1,
                    oneLevelId:a,
                    callback:function(a) {
                        d.attr("data-sex", a.id), d.val(a.value), "function" === $.type(b) && b();
                    }
                });
            });
        },
        translate:function(a, b, c, d) {
            var e = a && a.style;
            e && (e.webkitTransitionTimingFunction = e.transitionTimingFunction = "ease-out", 
            e.webkitTransitionDuration = e.transitionDuration = d + "ms", e.webkitTransform = "translate(" + b + "px," + c + "px) translateZ(0)", 
            e.msTransform = e.MozTransform = e.OTransform = "translate(" + b + "px," + c + "px)");
        },
        translatePage:function(a, b, c, d) {
            var e, f = a && a.style;
            f && (e = function() {
                df.transOk(), a.removeEventListener("webkitTransitionEnd", e);
            }, a.addEventListener("webkitTransitionEnd", e), f.webkitTransitionTimingFunction = f.transitionTimingFunction = "ease-out", 
            f.webkitTransitionDuration = f.transitionDuration = d + "ms", f.webkitTransform = "translate(" + b + "px," + c + "px) translateZ(0)", 
            f.msTransform = f.MozTransform = f.OTransform = "translate(" + b + "px," + c + "px)");
        },
        transOk:function() {
            this.isAni && (this.isAni = !1, df.oldPage && (df.translate($("#xCont" + df.oldPage).get(0), 0, 1136, 0), 
            $("#xCont" + df.oldPage).removeClass("current").hide()));
        },
        show:function(b) {
            if (b != this.nowPage) {
                $("#xCont" + b).show();
                setTimeout(function(){$('#xCont' + b).addClass('current')},500)
                var c = $(a).height();
                this.nowPage ? (this.oldPage = this.nowPage, df.nowPage = b, df.translatePage($("#xCont" + b).get(0), 0, c, 0), 
                $("#xCont" + b).get(0).offsetWidth = $("#xCont" + b).get(0).offsetWidth, df.translate($("#xCont" + this.oldPage).get(0), 0, -c, 500), 
                this.isAni = !0, df.translatePage($("#xCont" + b).get(0), 0, 0, 500)) :(df.nowPage = b, 
                df.translate($("#xCont" + b).get(0), 0, 0, 0), this.isAni = !0, df.transOk());
            }
        },
        share_tips:function() {
            setTimeout(function() {
                $(".layer_detail").show(), $(".layer_detail").on("click", function() {
                    $(this).hide();
                });
            }, 800);
        },
        suc_tips:function() {
            setTimeout(function() {
                $(".layer_suc").show(), $(".layer_suc").on("click", function() {
                    $(this).hide();
                });
            }, 800);
        }
    }, a.onload = function() {
        df.init();
    };
}(window, document);