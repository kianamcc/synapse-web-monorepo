import{jJ as T}from"./iframe-Bvv4ID9O.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CkIQYeDi.js";import"./index-r8ZA1smB.js";import"./useEntity-CQx6ZGyk.js";import"./pickBy-BQy0wlEN.js";import"./isString-B1KplquY.js";import"./_baseIteratee-B2Cz-LID.js";import"./useQueries-BaeJQT80.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DnzzjwPo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BUM-NT4n.js";import"./useSchema-eQOHUTZg.js";import"./index-Db9G8CqB.js";import"./enums-bS2G9jfn.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-1ZgQ0wWk.js";import"./uniq-t9BK9sU2.js";import"./forEach-B8iwwgef.js";import"./Grid-LuVi20o5.js";import"./ListItem-B8OkYDIo.js";import"./listItemButtonClasses-DYJBi0XT.js";import"./ListItemIcon-B8FAKbXF.js";import"./MenuItem-CfdXNe3p.js";import"./ListItemText-BFoDVJGR.js";import"./ArrowUpward-BGfGRMa7.js";import"./ContentCopy-CY9bsGKP.js";import"./FormControlLabel-DBzgkQXq.js";import"./Checkbox-VqvVXxOy.js";import"./SwitchBase-DbcTZZVB.js";import"./FormGroup-BlbIknjS.js";import"./RadioGroup-C93PoMEa.js";import"./Radio-BmihMdHb.js";import"./Slider-JaEu-xNu.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BWepRO3O.js";import"./DialogBase-DI9hpM3M.js";import"./Close-gfuBCl1y.js";import"./HelpPopover-KjW2Liz1.js";import"./MarkdownPopover-DtkdEBJk.js";import"./LightTooltip-BbQfoeul.js";import"./MarkdownSynapse-BqihxWd0.js";import"./SkeletonButton-CX_iqB-U.js";import"./SkeletonInlineBlock-B4dGOeql.js";import"./SkeletonTable-CrAxGwqy.js";import"./SkeletonParagraph-BrF-J-9t.js";import"./JsonSchemaForm-xAybOz3B.js";import"./GridLegacy-BOsDICVd.js";import"./HelpTwoTone-8r2ROYhG.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-B1UkiPHQ.js";import"./_createAggregator-CYtq9KGe.js";import"./_baseMap-B8nDev1C.js";import"./DateTimePicker-BvOV7ZhF.js";import"./useMobilePicker-6WRI4TZz.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BTx3RwlH.js";import"./index-TPGr2WBQ.js";import"./Chip-CH6SKqjX.js";import"./Tabs-DvCwAERc.js";import"./KeyboardArrowRight-CbZ21q7u.js";import"./Autocomplete-BmBoD7Xs.js";import"./usePreviousProps-tpWW8mks.js";import"./use-deep-compare-effect.esm-Bv4Uo8BR.js";import"./TextWidget-Ct1kmfLa.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
