import{jv as p}from"./iframe-BMgfrXfb.js";import{S as a}from"./SchemaDrivenAnnotationEditor-vAG_YPmr.js";import"./index-Chi_LkuB.js";import"./useEntity-BFmhndJX.js";import"./pickBy-Bdckf9kO.js";import"./isString-BqaHYMQK.js";import"./_baseIteratee-5eLKOOqR.js";import"./useInfiniteQuery-Cbz01EgT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ckgtub0H.js";import"./useSchema-Bdya5Ue2.js";import"./index-v7imu4b0.js";import"./enums-CaE4kMEd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-j47pxew3.js";import"./uniq-4WzyR3VV.js";import"./forEach-CWOCpBhE.js";import"./Add-ClFggWg3.js";import"./Grid-DXNyDVQM.js";import"./ListItem-DKwKZ5Zi.js";import"./listItemButtonClasses-C_WS2KLX.js";import"./ListItemIcon-RLbuqusk.js";import"./MenuItem-Dxe8Sczu.js";import"./ListItemText-Lp1Jhf6y.js";import"./ArrowUpward-Co6xDmQp.js";import"./ContentCopy-BhrgTIjn.js";import"./FormControlLabel-CMUY3YKI.js";import"./Checkbox-C5g82_9m.js";import"./SwitchBase-C3j3eoH9.js";import"./FormGroup-DsMw5htC.js";import"./RadioGroup-bUelhWY7.js";import"./Radio-CThtwb7S.js";import"./Slider-N_8mhz28.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-7Z8noB4Y.js";import"./DialogBase-D4iV4KIR.js";import"./Close-DhPVL8HB.js";import"./HelpPopover-B6gX6EfQ.js";import"./MarkdownPopover-B7JHaicc.js";import"./LightTooltip-DXrinBip.js";import"./MarkdownSynapse-CazEVfAQ.js";import"./SkeletonButton-D7PyYMMO.js";import"./SkeletonInlineBlock-DrHJKgo1.js";import"./SkeletonTable-DhKHQ1GZ.js";import"./SkeletonParagraph-B8T8hjnS.js";import"./JsonSchemaForm-BhONbXV4.js";import"./GridLegacy-Bg6riYLo.js";import"./HelpTwoTone-iMmn0AUJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B0stDqDS.js";import"./_createAggregator-DuRlLWdN.js";import"./_baseMap-CqqPaLqj.js";import"./DateTimePicker-CXnyovI-.js";import"./useMobilePicker-BTKaFpug.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CKXto2Zn.js";import"./index-DVKuYuST.js";import"./Chip-Bg1Tm2ZJ.js";import"./Tabs-CZuToH8q.js";import"./KeyboardArrowRight-DqLdEtOm.js";import"./Autocomplete-Baq3GSbJ.js";import"./usePreviousProps-Gb-wbx9E.js";import"./use-deep-compare-effect.esm-DGvQ55C3.js";import"./TextWidget-BLqzbGne.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
