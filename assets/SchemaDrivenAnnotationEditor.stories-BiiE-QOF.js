import{jJ as T}from"./iframe-DcJpmp1V.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DriHNNb8.js";import"./index-r8ZA1smB.js";import"./useEntity-B6ww8tw7.js";import"./pickBy-BKwV6wV9.js";import"./isString-iNb2aTKj.js";import"./_baseIteratee-BxQYWf9f.js";import"./useQueries-GjC1PRXV.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Btt3ZcbH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBXosuCm.js";import"./useSchema-1xYP83eX.js";import"./index-DXrYqBcW.js";import"./enums-DuJH2RR6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Da2adyxG.js";import"./uniq-ChWLIqBD.js";import"./forEach-B8iwwgef.js";import"./Grid-Iy6KwBDK.js";import"./ListItem-BAVrp495.js";import"./listItemButtonClasses-CCE-ZWi6.js";import"./ListItemIcon-Dmlf9b5Z.js";import"./MenuItem-CbRug303.js";import"./ListItemText-C7bM7dTE.js";import"./ArrowUpward-CikZ6rdZ.js";import"./ContentCopy-BQahFKfP.js";import"./FormControlLabel-BABdeTL-.js";import"./Checkbox-DxwjfKtk.js";import"./SwitchBase-D-XqqAph.js";import"./FormGroup-DqB0AWbo.js";import"./RadioGroup-BgS8C9-L.js";import"./Radio-BuRya3ey.js";import"./Slider-CIkdasK1.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DDza5CfY.js";import"./DialogBase-BEjE_oc_.js";import"./Close-Dcx23buO.js";import"./HelpPopover-BE1pk0Q2.js";import"./MarkdownPopover-D3pZUAoK.js";import"./LightTooltip-DLmuU1bJ.js";import"./MarkdownSynapse-Czv-k2yf.js";import"./SkeletonButton-DkRzYKJ9.js";import"./SkeletonInlineBlock-D7vcjj_c.js";import"./SkeletonTable-B6OGgiWA.js";import"./SkeletonParagraph-nIFCADcu.js";import"./JsonSchemaForm-aWrIv4u0.js";import"./GridLegacy-CljLB9S3.js";import"./HelpTwoTone-DarWOhpR.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Dc9qnY7L.js";import"./_createAggregator-CBtPbs2o.js";import"./_baseMap-DUb_jyqf.js";import"./DateTimePicker-6R0PGM4h.js";import"./useMobilePicker-B57o62fH.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DXO18e-r.js";import"./index-Cg17DPBV.js";import"./Chip-C_u6PkYz.js";import"./Tabs-qKf2_Kya.js";import"./KeyboardArrowRight-b5aJfP0b.js";import"./Autocomplete-DkqZCTvF.js";import"./usePreviousProps-Rd_ujcaK.js";import"./use-deep-compare-effect.esm-COZa2kPC.js";import"./TextWidget-BBkTUP1j.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
