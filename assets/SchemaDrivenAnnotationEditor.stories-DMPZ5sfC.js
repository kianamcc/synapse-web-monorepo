import{jJ as T}from"./iframe-CilUHbPg.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CaBYdEF8.js";import"./index-r8ZA1smB.js";import"./useEntity-BmlUl-r7.js";import"./pickBy-DijzeuJ2.js";import"./isString-C-NPF1R2.js";import"./_baseIteratee-aXPVtJAg.js";import"./useQueries-C86FHiXO.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CiMH4Vku.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-IzEWxt-O.js";import"./useSchema-BfDeUYCl.js";import"./index-DfVXlRPU.js";import"./enums-DUabj_98.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ChVrrgk5.js";import"./uniq-qUh1kdV4.js";import"./forEach-B8iwwgef.js";import"./Grid-wETwsgbg.js";import"./ListItem-7aTxRxYQ.js";import"./listItemButtonClasses-4OVo39T3.js";import"./ListItemIcon-DQ_6_kH0.js";import"./MenuItem-DRH3ELNc.js";import"./ListItemText-LRSgZc5g.js";import"./ArrowUpward-B0PRtxDa.js";import"./ContentCopy-DTUzkJgZ.js";import"./FormControlLabel-BDptKX7D.js";import"./Checkbox-jrzWhPpX.js";import"./SwitchBase-cymeMccA.js";import"./FormGroup-unck3KFd.js";import"./RadioGroup-CjCKe7rg.js";import"./Radio-BEkw6400.js";import"./Slider-EhMhpWT_.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CmKdHCN4.js";import"./DialogBase-C-nhtl71.js";import"./Close-C47av42V.js";import"./HelpPopover-C4EQhFdh.js";import"./MarkdownPopover-CXrifCK2.js";import"./LightTooltip-CnXLnWLu.js";import"./MarkdownSynapse-BIpeO25x.js";import"./SkeletonButton-CSbYuARp.js";import"./SkeletonInlineBlock-CTT3cgnO.js";import"./SkeletonTable-BBjGNDxT.js";import"./SkeletonParagraph-Db2vPRz1.js";import"./JsonSchemaForm-CutfFCOZ.js";import"./GridLegacy-BzAr0VOW.js";import"./HelpTwoTone-4Nxg6qwf.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-B6_q46ro.js";import"./_createAggregator-6tLuziYO.js";import"./_baseMap-ByG3mCKH.js";import"./DateTimePicker-BHmaAdLb.js";import"./useMobilePicker-BFYcDrry.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Bnwv9wBD.js";import"./index-C8mATgyQ.js";import"./Chip-CkYJv3x0.js";import"./Tabs-BKwoAgdu.js";import"./KeyboardArrowRight-BshDCsMb.js";import"./Autocomplete-Dr-atOFV.js";import"./usePreviousProps-EFCUoFvo.js";import"./use-deep-compare-effect.esm-BSZ-nTCj.js";import"./TextWidget-C9AuX9SI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
