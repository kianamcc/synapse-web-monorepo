import{jx as p}from"./iframe-CZHSx5wE.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dm59Ut98.js";import"./index-Chi_LkuB.js";import"./useEntity-DTPz22my.js";import"./pickBy-C3Fd7sur.js";import"./isString-Bk7WbP2_.js";import"./_baseIteratee-DCncjzSw.js";import"./useInfiniteQuery-CS833kDM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0ASgpHy.js";import"./useSchema-CU6Tu8N4.js";import"./index-D4N1CjFP.js";import"./enums-CE3kdcZ-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D3LyP7M6.js";import"./uniq-BLDAgS8z.js";import"./forEach-CWOCpBhE.js";import"./Add-BjPebUE0.js";import"./Grid-BzGkt_Uj.js";import"./ListItem-Boavtua3.js";import"./listItemButtonClasses-CMOAJ4Dg.js";import"./ListItemIcon-BRmtf8BL.js";import"./MenuItem-9G2m_4hr.js";import"./ListItemText-leVLcaLR.js";import"./ArrowUpward-CPcfgyny.js";import"./ContentCopy-XsoIhZSD.js";import"./FormControlLabel-DcwvPxSI.js";import"./Checkbox-qPdo7eWH.js";import"./SwitchBase-DkO8c4je.js";import"./FormGroup-DnFOsK86.js";import"./RadioGroup-B9mBaJVC.js";import"./Radio-B6T0jDhC.js";import"./Slider-ywlzfefQ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-pnn_aK2g.js";import"./DialogBase-CS2gTNzV.js";import"./Close-Ds5z5nV-.js";import"./HelpPopover-AzM6-1Mr.js";import"./MarkdownPopover-_55D8pmQ.js";import"./LightTooltip-Bl7I4CQL.js";import"./MarkdownSynapse-phzYM2Y3.js";import"./SkeletonButton-BE152swZ.js";import"./SkeletonInlineBlock-BWjEXTNa.js";import"./SkeletonTable-BtPTkHAP.js";import"./SkeletonParagraph-BXCrfssX.js";import"./JsonSchemaForm-DdIEg04i.js";import"./GridLegacy-CaOuUl4S.js";import"./HelpTwoTone-C9d6Lbr9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B_xXwLK-.js";import"./_createAggregator-Bo7lkFjy.js";import"./_baseMap-C7oJPype.js";import"./DateTimePicker-Cg1FMSx2.js";import"./useMobilePicker-ZJjmtRXf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CKROAQ08.js";import"./index-BdE-IeMQ.js";import"./Chip-DRM-PW0Q.js";import"./Tabs-DoaMAHsk.js";import"./KeyboardArrowRight-vwM8DeUz.js";import"./Autocomplete-5onILfCP.js";import"./usePreviousProps-2eUC0c_E.js";import"./use-deep-compare-effect.esm-BTQljnhV.js";import"./TextWidget-DlMF8RKd.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
