
var app={
	eachTree:function(data,callback,parent,level){
		var _this=this;
		level=level||0;
		for(var a=0;a<data.length;a++){
			var node=data[a];
			if(callback.call(node,node,parent,a,level,data)===false){
				return false;
			}
			if(node.children&&node.children.length){
				if(this.eachTree(node.children,callback,node,level+1)===false){
					return false;
				}
			}
		}
	}
}
var hash = {};

var a = [
    {
        "attrName": "", 
        "attributes": {
            "accessorType": "normal", 
            "NTYPE": "GXGroup"
        }, 
        "children": [
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000002IY9YDPPJ03", 
                "lvl": 2, 
                "name": "动车焊接工区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ03", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "动车焊接工区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000002IY9YDPPJ04", 
                "lvl": 2, 
                "name": "地铁焊接工区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ04", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "地铁焊接工区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000002IY9YDPPJ05", 
                "lvl": 2, 
                "name": "加工组装工区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ05", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "加工组装工区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000002IY9YDPPJ06", 
                "lvl": 2, 
                "name": "轮轴工区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ06", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "轮轴工区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000002IY9YDPPJ07", 
                "lvl": 2, 
                "name": "检修工区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ07", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "检修工区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000801J097U9VI01", 
                "lvl": 2, 
                "name": "技术室", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000801J097U9VI01", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "技术室"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000801J0JEQ24P01", 
                "lvl": 2, 
                "name": "D6厂区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000801J0JEQ24P01", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "D6厂区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000801J0JESPSM01", 
                "lvl": 2, 
                "name": "C4厂区", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000801J0JESPSM01", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "C4厂区"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-GROUP", 
                "id": "1004000801J0JEVEE601", 
                "lvl": 2, 
                "name": "四机劳务", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000801J0JEVEE601", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "四机劳务"
            }, 
            {
                "attrName": "", 
                "attributes": {
                    "hasChildren": true, 
                    "accessorType": "normal", 
                    "NTYPE": "GXRoleInGroup"
                }, 
                "children": [ ], 
                "desc": "", 
                "iconCls": "icon-ROLE", 
                "id": "1004000002IY9YDPPJ11", 
                "lvl": 3, 
                "name": "资料员", 
                "parentID": "1004000002IY9YDPPJ02", 
                "parentName": "", 
                "seqID": "null-1004000002IY9YDPPJ11", 
                "seqName": "", 
                "seqType": "", 
                "state": "closed", 
                "text": "资料员"
            }
        ], 
        "desc": "", 
        "iconCls": "icon-GROUP", 
        "id": "1004000801J097U9VI01", 
        "lvl": 2, 
        "name": "技术室", 
        "parentID": "0", 
        "parentName": "", 
        "seqID": "0-1004000801J097U9VI01", 
        "seqName": "", 
        "seqType": "", 
        "state": "closed", 
        "text": "技术室"
    }
];
app.eachTree(a, function(){
	if(hash[this.id]){
		console.log(this.id)
	};
		hash[this.id] = true;
	});