(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{776:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dml-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dml-介绍"}},[t._v("#")]),t._v(" DML—介绍")]),t._v(" "),s("p",[t._v("添加数据（INSERT)")]),t._v(" "),s("p",[t._v("修改数据（UPDATE)")]),t._v(" "),s("p",[t._v("删除数据（DELETE)")]),t._v(" "),s("h2",{attrs:{id:"dml-添加数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dml-添加数据"}},[t._v("#")]),t._v(" DML—添加数据")]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("p",[s("strong",[t._v("·插入数据时，指定的字段顺序需要与值的顺序是一一对应的。")])]),t._v(" "),s("p",[s("strong",[t._v("·字符串和日期型数据应该包含在引号中。")])]),t._v(" "),s("p",[s("strong",[t._v("·插入的数据大小，应该在字段的规定范围内。")])]),t._v(" "),s("p",[t._v("1.给指定字段添加数据")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("INSERT INTO 表名 (字段名1，字段名2，...)  VALUES(值1，值2，...);\n")])])]),s("p",[t._v("2.给全部字段添加数据")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("INSERT INTO 表名 VALUES(值1，值2，...) ;\n")])])]),s("p",[t._v("3.批量添加数据")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("INSERT INTO 表名 (字段名1，字段名2，...) VALUES(值1,值2，...),（值1,值2，...);\n\nINSERT INTO表名 VALUES(值1，值2，...),(值1，值2，...),(值1，值2，...);\n")])])]),s("h2",{attrs:{id:"dml-修改数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dml-修改数据"}},[t._v("#")]),t._v(" DML—修改数据")]),t._v(" "),s("p",[s("strong",[t._v("注意:修改语句的条件可以有，也可以没有，如果没有条件，则会修改整张表的所有数据。")])]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("UPDATA 表名 SET 字段名1=值1,字段名2=值2,...[WHERE 条件];\n")])])]),s("h2",{attrs:{id:"dml-删除数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dml-删除数据"}},[t._v("#")]),t._v(" DML—删除数据")]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("p",[s("strong",[t._v(".DELETE语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的所有数据。")])]),t._v(" "),s("p",[s("strong",[t._v(". DELETE语句不能删除某一个字段的值(可以使用UPDATE)。")])]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE FROM 表名 [WHERE 条件];\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);