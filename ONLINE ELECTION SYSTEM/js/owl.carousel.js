/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
		                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
 Visible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","bl         <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     �� ɶJ�/��� �������z�cz~��h�ޟ�� �/��� �/7��ܞ�2���[h�����*�.�[������zB�{� ?N����S�oO�����W���k���K� m_��K�iE��Z����ҿ�-�P�#߱�}3��sP�z�Z�1�������Πkw�ן�8� =kC�Ij�뺼���壿�ME;cz~��h�ޟ�� �nͮ�_;�.� �o�[\�Qvn���W����4�i]������ ��'�����?�o_�4�+S�Qѵ��� =wM����q���ol�]�1>��>���� 9�d��� �󚈡�#O��~?�FHd㦫OG��~�{�L����	�� ��=r���� ?��� 9�6�c}G�֘"`�����or�BѓZ�|� ����]�6Q�� �4�=?ϭX ����� ��e3�:� ?�� ��� ��y�;�G�g����loO�����ZBW�~V}��ﾏ��������^^_�KG�G���O�q�A���#����� ��y�"~��:�$���G$s�7f��%� ����sm���\˿[� �m�@A?��w� t� �KJ�_ӫu� 9��8�JeX���܂{���\s%j�z�ÎP�����ߧ��YVh��<A����c���ГB��=?�l=?����V��������rb)��q��;�>� �9㋴��7o�R����oˮNi}:w���� >��X����� ��'����������5.���G�ѱ�?Q�5���`�_�� >�Z�0��?���I���J�<�z�pG��w�CgX�=�z[���-�um��J�����?�'��*Ћ�A�g�2�>��;�K���A�t9�y�3���/��� �/7��ܞ�3Vo�O�_�����]=�H�����S�y�8�����g��sͲ�׷����_}��j<�z� �\�C���E*�X�/nW�yi�]m����2KV��U9.�����[��F�;Nz� ���� 9��^�q��\������s�ת� Ҫui�]���W�[&�5����M�Tƍ[������� ����Lg���\� �ƛ�G��kk�]V�=V�mu����sΊ�q[ou��o_u��k��6F\����s�����e^ܝ3�os����,�a��=H��鞹Ǯk
��9.�wZ�%�}����k�����߅�����B@#�� ������� �ӧ� �������M�c��_�UC7N�ŭ���k��z�#����� �z������5l�A�����q��o<��0�����_��|���5��?�����|���9�� 랿�$�Y�������P��O���g����5�~�������+�>��>� ��w��S
u#���-���<��spݫ���e������G� �g� Mt�}H�ۑ׌����~�F�;z���'��1�ccz~��i�SrRI�YEk����� }]̜Uo;[�����#�?�ު4,:|ߡ�:���u��׷����_}��j�0�����ݧ��^ɭ۹D�/PG_������B=� ��O� _��r�:� �sϸ���lӠ�(�������}�}��� �������h�7����?S� �5d�A�����q��o<lhۺ~���{�pզ�̵�+������ G��F$=H8� ?��Q>��V��s��qΉP������ ���<�
�Q���ǜ4��=Χ�����O�����g����ON���{�ﺜw^�� J�q�-�]�zw֪���n�� �����}�FP����� ��j}������Dw^�� J�����^�
kNYY�{����ܗ��ܮW�� ���'ׯ�DP����� ��j��둏�{=�����kk���_�kg��̬�ml�9�?�� Ϋ��N~����c���<�j��둏�{=�����j�g(�4V��rVM9-m%��v�N۫�F�̙Xz������|��UZ^�0���t��g�qִXd\����� � ��C].6m}Ͼ뿗�K�w�U�f��5��^K]�OoWݲ��c�s��O��Fj���#�?��眝6�6N9�FFO�^���ɪ� H�� >�&.-]�m��//��+}J�����~��HϷ~qԏ���rn�G_O^[���y$�������C'���}e����+�%q�N��n�����U£ g���?]��j��y� ?^h9�O�kt�;>��_m�m���E:�Ϸ~������h������NEWM�%n����� ���{�r�I�KF��������k���;�� ����� ,������?7��7��^ߛ{�}����k��=�� ��z�o��ԂR��s5�Jk_U��}M���9� ������rk�$d�H�Nr9����KU�#�2����2=OQ�ȑ���9�c��~\���BN���}$��}���w�0pѴ�����F� ~�Z��������H�>�{����$�6 ��nG�{�}����v7��?Ʒ��G� ^k����o����/�[��J��n��g��8��;

		appendWrapperSizes : function(){
			var base = this;
			var width = 0;

			var width = base.$owlItems.length * base.itemWidth;

			base.$owlWrapper.css({
				"width": width*2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items)
		},

		max :                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
 nationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNa         <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     �� ɶJ�/��� �������z�cz~��h�ޟ�� �/��� �/7��ܞ�2���[h�����*�.�[������zB�{� ?N����S�oO�����W���k���K� m_��K�iE��Z����ҿ�-�P�#߱�}3��sP�z�Z�1�������Πkw�ן�8� =kC�Ij�뺼���壿�ME;cz~��h�ޟ�� �nͮ�_;�.� �o�[\�Qvn���W����4�i]������ ��'�����?�o_�4�+S�Qѵ��� =wM����q���ol�]�1>��>���� 9�d��� �󚈡�#O��~?�FHd㦫OG��~�{�L����	�� ��=r���� ?��� 9�6�c}G�֘"`�����or�BѓZ�|� ����]�6Q�� �4�=?ϭX ����� ��e3�:� ?�� ��� ��y�;�G�g����loO�����ZBW�~V}��ﾏ��������^^_�KG�G���O�q�A���#����� ��y�"~��:�$���G$s�7f��%� ����sm���\˿[� �m�@A?��w� t� �KJ�_ӫu� 9��8�JeX���܂{���\s%j�z�ÎP�����ߧ��YVh��<A����c���ГB��=?�l=?����V��������rb)��q��;�>� �9㋴��7o�R����oˮNi}:w���� >��X����� ��'����������5.���G�ѱ�?Q�5���`�_�� >�Z�0��?���I���J�<�z�pG��w�CgX�=�z[���-�um��J�����?�'��*Ћ�A�g�2�>��;�K���A�t9�y�3���/��� �/7��ܞ�3Vo�O�_�����]=�H�����S�y�8�����g��sͲ�׷����_}��j<�z� �\�C���E*�X�/nW�yi�]m����2KV��U9.�����[��F�;Nz� ���� 9��^�q��\������s�ת� Ҫui�]���W�[&�5����M�Tƍ[������� ����Lg���\� �ƛ�G��kk�]V�=V�mu����sΊ�q[ou��o_u��k��6F\����s�����e^ܝ3�os����,�a��=H��鞹Ǯk
��9.�wZ�%�}����k�����߅�����B@#�� ������� �ӧ� �������M�c��_�UC7N�ŭ���k��z�#����� �z������5l�A�����q��o<��0�����_��|���5��?�����|���9�� 랿�$�Y�������P��O���g����5�~�������+�>��>� ��w��S
u#���-���<��spݫ���e������G� �g� Mt�}H�ۑ׌����~�F�;z���'��1�ccz~��i�SrRI�YEk����� }]̜Uo;[�����#�?�ު4,:|ߡ�:���u��׷����_}��j�0�����ݧ��^ɭ۹D�/PG_������B=� ��O� _��r�:� �sϸ���lӠ�(�������}�}��� �������h�7����?S� �5d�A�����q��o<lhۺ~���{�pզ�̵�+������ G��F$=H8� ?��Q>��V��s��qΉP������ ���<�
�Q���ǜ4��=Χ�����O�����g����ON���{�ﺜw^�� J�q�-�]�zw֪���n�� �����}�FP����� ��j}������Dw^�� J�����^�
kNYY�{����ܗ��ܮW�� ���'ׯ�DP����� ��j��둏�{=�����kk���_�kg��̬�ml�9�?�� Ϋ��N~����c���<�j��둏�{=�����j�g(�4V��rVM9-m%��v�N۫�F�̙Xz������|��UZ^�0���t��g�qִXd\����� � ��C].6m}Ͼ뿗�K�w�U�f��5��^K]�OoWݲ��c�s��O��Fj���#�?��眝6�6N9�FFO�^���ɪ� H�� >�&.-]�m��//��+}J�����~��HϷ~qԏ���rn�G_O^[���y$�������C'���}e����+�%q�N��n�����U£ g���?]��j��y� ?^h9�O�kt�;>��_m�m���E:�Ϸ~������h������NEWM�%n����� ���{�r�I�KF��������k���;�� ����� ,������?7��7��^ߛ{�}����k��=�� ��z�o��ԂR��s5�Jk_U��}M���9� ������rk�$d�H�Nr9����KU�#�2����2=OQ�ȑ���9�c��~\���BN���}$��}���w�0pѴ�����F� ~�Z��������H�>�{����$�6 ��nG�{�}����v7��?Ʒ��G� ^k����o����/�[��J��n��g��8��;lideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(speed === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(speed === "rewind" ){
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo : function(position){
			var base = this;
			if(typeof ba                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
 nslate3D +
								  "; transform:"         + translate3D;
			var	regex = /translate3d\(0px, 0px, 0px\)/g,
				asSupport = tempElem.style.cssText.match(regex),
				support3d = (asSupport !== null && asSupport.length === 1);

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d" : support3d,
				"isTouch" : isTouch
			}
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				b         <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     �� ɶJ�/��� �������z�cz~��h�ޟ�� �/��� �/7��ܞ�2���[h�����*�.�[������zB�{� ?N����S�oO�����W���k���K� m_��K�iE��Z����ҿ�-�P�#߱�}3��sP�z�Z�1�������Πkw�ן�8� =kC�Ij�뺼���壿�ME;cz~��h�ޟ�� �nͮ�_;�.� �o�[\�Qvn���W����4�i]������ ��'�����?�o_�4�+S�Qѵ��� =wM����q���ol�]�1>��>���� 9�d��� �󚈡�#O��~?�FHd㦫OG��~�{�L����	�� ��=r���� ?��� 9�6�c}G�֘"`�����or�BѓZ�|� ����]�6Q�� �4�=?ϭX ����� ��e3�:� ?�� ��� ��y�;�G�g����loO�����ZBW�~V}��ﾏ��������^^_�KG�G���O�q�A���#����� ��y�"~��:�$���G$s�7f��%� ����sm���\˿[� �m�@A?��w� t� �KJ�_ӫu� 9��8�JeX���܂{���\s%j�z�ÎP�����ߧ��YVh��<A����c���ГB��=?�l=?����V��������rb)��q��;�>� �9㋴��7o�R����oˮNi}:w���� >��X����� ��'����������5.���G�ѱ�?Q�5���`�_�� >�Z�0��?���I���J�<�z�pG��w�CgX�=�z[���-�um��J�����?�'��*Ћ�A�g�2�>��;�K���A�t9�y�3���/��� �/7��ܞ�3Vo�O�_�����]=�H�����S�y�8�����g��sͲ�׷����_}��j<�z� �\�C���E*�X�/nW�yi�]m����2KV��U9.�����[��F�;Nz� ���� 9��^�q��\������s�ת� Ҫui�]���W�[&�5����M�Tƍ[������� ����Lg���\� �ƛ�G��kk�]V�=V�mu����sΊ�q[ou��o_u��k��6F\����s�����e^ܝ3�os����,�a��=H��鞹Ǯk
��9.�wZ�%�}����k�����߅�����B@#�� ������� �ӧ� �������M�c��_�UC7N�ŭ���k��z�#����� �z������5l�A�����q��o<��0�����_��|���5��?�����|���9�� 랿�$�Y�������P��O���g����5�~�������+�>��>� ��w��S
u#���-���<��spݫ���e������G� �g� Mt�}H�ۑ׌����~�F�;z���'��1�ccz~��i�SrRI�YEk����� }]̜Uo;[�����#�?�ު4,:|ߡ�:���u��׷����_}��j�0�����ݧ��^ɭ۹D�/PG_������B=� ��O� _��r�:� �sϸ���lӠ�(�������}�}��� �������h�7����?S� �5d�A�����q��o<lhۺ~���{�pզ�̵�+������ G��F$=H8� ?��Q>��V��s��qΉP������ ���<�
�Q���ǜ4��=Χ�����O�����g����ON���{�ﺜw^�� J�q�-�]�zw֪���n�� �����}�FP����� ��j}������Dw^�� J�����^�
kNYY�{����ܗ��ܮW�� ���'ׯ�DP����� ��j��둏�{=�����kk���_�kg��̬�ml�9�?�� Ϋ��N~����c���<�j��둏�{=�����j�g(�4V��rVM9-m%��v�N۫�F�̙Xz������|��UZ^�0���t��g�qִXd\����� � ��C].6m}Ͼ뿗�K�w�U�f��5��^K]�OoWݲ��c�s��O��Fj���#�?��眝6�6N9�FFO�^���ɪ� H�� >�&.-]�m��//��+}J�����~��HϷ~qԏ���rn�G_O^[���y$�������C'���}e����+�%q�N��n�����U£ g���?]��j��y� ?^h9�O�kt�;>��_m�m���E:�Ϸ~������h������NEWM�%n����� ���{�r�I�KF��������k���;�� ����� ,������?7��7��^ߛ{�}����k��=�� ��z�o��ԂR��s5�Jk_U��}M���9� ������rk�$d�H�Nr9����KU�#�2����2=OQ�ȑ���9�c��~\���BN���}$��}���w�0pѴ�����F� ~�Z��������H�>�{����$�6 ��nG�{�}����v7��?Ʒ��G� ^k����o����/�[��J��n��g��8��;.$elem]);
				}

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				}
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
 rue && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}
			for(var i=0; i<base.itemsAmount; i++){
				var $item = $(base.$owlItems[i]);

				if($item.data("owl-loaded") === "loaded"){
					continue;
				}

				var	itemNumber         <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     �� ɶJ�/��� �������z�cz~��h�ޟ�� �/��� �/7��ܞ�2���[h�����*�.�[������zB�{� ?N����S�oO�����W���k���K� m_��K�iE��Z����ҿ�-�P�#߱�}3��sP�z�Z�1�������Πkw�ן�8� =kC�Ij�뺼���壿�ME;cz~��h�ޟ�� �nͮ�_;�.� �o�[\�Qvn���W����4�i]������ ��'�����?�o_�4�+S�Qѵ��� =wM����q���ol�]�1>��>���� 9�d��� �󚈡�#O��~?�FHd㦫OG��~�{�L����	�� ��=r���� ?��� 9�6�c}G�֘"`�����or�BѓZ�|� ����]�6Q�� �4�=?ϭX ����� ��e3�:� ?�� ��� ��y�;�G�g����loO�����ZBW�~V}��ﾏ��������^^_�KG�G���O�q�A���#����� ��y�"~��:�$���G$s�7f��%� ����sm���\˿[� �m�@A?��w� t� �KJ�_ӫu� 9��8�JeX���܂{���\s%j�z�ÎP�����ߧ��YVh��<A����c���ГB��=?�l=?����V��������rb)��q��;�>� �9㋴��7o�R����oˮNi}:w���� >��X����� ��'����������5.���G�ѱ�?Q�5���`�_�� >�Z�0��?���I���J�<�z�pG��w�CgX�=�z[���-�um��J�����?�'��*Ћ�A�g�2�>��;�K���A�t9�y�3���/��� �/7��ܞ�3Vo�O�_�����]=�H�����S�y�8�����g��sͲ�׷����_}��j<�z� �\�C���E*�X�/nW�yi�]m����2KV��U9.�����[��F�;Nz� ���� 9��^�q��\������s�ת� Ҫui�]���W�[&�5����M�Tƍ[������� ����Lg���\� �ƛ�G��kk�]V�=V�mu����sΊ�q[ou��o_u��k��6F\����s�����e^ܝ3�os����,�a��=H��鞹Ǯk
��9.�wZ�%�}����k�����߅�����B@#�� ������� �ӧ� �������M�c��_�UC7N�ŭ���k��z�#����� �z������5l�A�����q��o<��0�����_��|���5��?�����|���9�� 랿�$�Y�������P��O���g����5�~�������+�>��>� ��w��S
u#���-���<��spݫ���e������G� �g� Mt�}H�ۑ׌����~�F�;z���'��1�ccz~��i�SrRI�YEk����� }]̜Uo;[�����#�?�ު4,:|ߡ�:���u��׷����_}��j�0�����ݧ��^ɭ۹D�/PG_������B=� ��O� _��r�:� �sϸ���lӠ�(�������}�}��� �������h�7����?S� �5d�A�����q��o<lhۺ~���{�pզ�̵�+������ G��F$=H8� ?��Q>��V��s��qΉP������ ���<�
�Q���ǜ4��=Χ�����O�����g����ON���{�ﺜw^�� J�q�-�]�zw֪���n�� �����}�FP����� ��j}������Dw^�� J�����^�
kNYY�{����ܗ��ܮW�� ���'ׯ�DP����� ��j��둏�{=�����kk���_�kg��̬�ml�9�?�� Ϋ��N~����c���<�j��둏�{=�����j�g(�4V��rVM9-m%��v�N۫�F�̙Xz������|��UZ^�0���t��g�qִXd\����� � ��C].6m}Ͼ뿗�K�w�U�f��5��^K]�OoWݲ��c�s��O��Fj���#�?��眝6�6N9�FFO�^���ɪ� H�� >�&.-]�m��//��+}J�����~��HϷ~qԏ���rn�G_O^[���y$�������C'���}e����+�%q�N��n�����U£ g���?]��j��y� ?^h9�O�kt�;>��_m�m���E:�Ϸ~������h������NEWM�%n����� ���{�r�I�KF��������k���;�� ����� ,������?7��7��^ߛ{�}����k��=�� ��z�o��ԂR��s5�Jk_U��}M���9� ������rk�$d�H�Nr9����KU�#�2����2=OQ�ȑ���9�c��~\���BN���}$��}���w�0pѴ�����F� ~�Z��������H�>�{����$�6 ��nG�{�}����v7��?Ʒ��G� ^k����o����/�[��J��n��g��8��;e.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
	            .addClass('owl-origin')
	            .css({
	            	"-webkit-transform-origin" : origin+"px",
	            	"-moz-perspective-origin" : origin+"px",
	            	"perspective-origin" : origin+"px"
	            });
	        function transStyles(prevPos,zindex){
				return {
					"position" : "relative",                 desc: "Analysis",
                    values: [{
                        from: "/Date(1320192000000)/",
                        to: "/Date(1322401600000)/",
                        label: "Requirement Gathering",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: " ",
                    desc: "Scoping",
                    values: [{
                        from: "/Date(1322611200000)/",
                        to: "/Date(1323302400000)/",
                        label: "Scoping",
                        customClass: "ganttRed"
                    }]
                }, {
                    name: "Sprint 1",
                    desc: "Development",
                    values: [{
                        from: "/Date(1323802400000)/",
                        to: "/Date(1325685200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1325685200000)/",
                        to: "/Date(1325695200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Sprint 2",
                    desc: "Development",
                    values: [{
                        from: "/Date(1326785200000)/",
                        to: "/Date(1325785200000)/",
                        label: "Development",
                        customClass: "ganttGreen"
                    }]
                }, {
                    name: " ",
                    desc: "Showcasing",
                    values: [{
                        from: "/Date(1328785200000)/",
                        to: "/Date(1328905200000)/",
                        label: "Showcasing",
                        customClass: "ganttBlue"
                    }]
                }, {
                    name: "Release Stage",
                    desc: "Training",
                    values: [{
                        from: "/Date(1330011200000)/",
                        to: "/Date(1336611200000)/",
                        label: "Training",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Deployment",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1338711200000)/",
                        label: "Deployment",
                        customClass: "ganttOrange"
                    }]
                }, {
                    name: " ",
                    desc: "Warranty Period",
                    values: [{
                        from: "/Date(1336611200000)/",
                        to: "/Date(1349711200000)/",
                        label: "Warranty Period",
                        customClass: "ganttOrange"
                    }]
                }],
                navigate: "scroll",
                scale: "weeks",
                maxScale: "months",
                minScale: "days",
                itemsPerPage: 10,
                onItemClick: function (data) {
                    alert("Item clicked - show some details");
                },
                onAddClick: function (dt, rowId) {
 [979,4],
		itemsTablet : [768,3],
		itemsTabletSmall : false,
		itemsMobile : [480,2],
		singleItem : false,
		itemsScaleUp : false,

		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		autoPlay : false,
		stopOnHover : false,

		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers : false,

		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth	: window,
		

		baseClass : "owl-caro         <asp:Parameter Name="original_Register_id" Type="Decimal" />
            <asp:Parameter Name="original_Name" Type="String" />
            <asp:Parameter Name="original_Address" Type="String" />
            <asp:Parameter Name="original_Contact" Type="Decimal" />
            <asp:Parameter Name="original_Email_id" Type="String" />
            <asp:Parameter Name="original_Age" Type="Decimal" />
            <asp:Parameter Name="original_Gender" Type="String" />
        </UpdateParameters>
    </asp:SqlDataSource