import{jK as T}from"./iframe-D2BiYAJm.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DS33gpAq.js";import"./index-r8ZA1smB.js";import"./useEntity-Do9HpzC8.js";import"./pickBy-D-9P8-F0.js";import"./isString-nCXr2nXn.js";import"./_baseIteratee-DJIGxw8_.js";import"./useQueries--e6O_A4l.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Sh2g8CYk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-iVaLoLsq.js";import"./useSchema-DONPF61A.js";import"./index-C9JVB7aT.js";import"./enums-CA1H2HUz.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-lVBn3sji.js";import"./uniq-DNDVbKGE.js";import"./forEach-B8iwwgef.js";import"./Grid-B4RGG4Wg.js";import"./ListItem-5fUPJfEc.js";import"./listItemButtonClasses-DUq_dJ2b.js";import"./ListItemIcon-nUY9RMnm.js";import"./MenuItem-DHvtuYhK.js";import"./ListItemText-BT2ALNvG.js";import"./ArrowUpward-eMrfCs03.js";import"./ContentCopy-Dt_VsLaa.js";import"./FormControlLabel-qTCtrOZ6.js";import"./Checkbox-aIn5SsHz.js";import"./SwitchBase-DTUTBpjJ.js";import"./FormGroup-D1NzuvEr.js";import"./RadioGroup-Cz_0UVl1.js";import"./Radio-CD9UTOQb.js";import"./Slider-CtarW39E.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BHYK11ln.js";import"./DialogBase-C88NL5F2.js";import"./Close-CPRnS3EQ.js";import"./HelpPopover-By6qNja7.js";import"./MarkdownPopover-DszL4-wR.js";import"./LightTooltip-BghfsgXw.js";import"./MarkdownSynapse-CGCT0a2t.js";import"./SkeletonButton-B12Q1It5.js";import"./SkeletonInlineBlock-BQ13hP2k.js";import"./SkeletonTable-Deli_bNc.js";import"./SkeletonParagraph-BT8-dcZm.js";import"./JsonSchemaForm-CeXcZDNi.js";import"./GridLegacy-Df0AvOqn.js";import"./HelpTwoTone-lfEFSb6P.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CwdkPPHO.js";import"./_createAggregator-Cvl3PRJm.js";import"./_baseMap-wsin_ybF.js";import"./DateTimePicker-BzwaqVUM.js";import"./useMobilePicker-0b6k1USi.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-B8jqP_ze.js";import"./index-B3O79Ih6.js";import"./Chip-c69jX1Rh.js";import"./Tabs-BiFLVhQ0.js";import"./KeyboardArrowRight-i37W4El4.js";import"./Autocomplete-DwzAuKdQ.js";import"./usePreviousProps-CsFFd7jD.js";import"./use-deep-compare-effect.esm-B5fo4BFf.js";import"./TextWidget-DDMZQ_6I.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
