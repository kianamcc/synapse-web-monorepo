import{jx as p}from"./iframe-BB1CyglU.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D9E8tM2F.js";import"./index-Chi_LkuB.js";import"./useEntity-DB7TJ2Jp.js";import"./pickBy-WU22Swdo.js";import"./isString-DnUJ7bUV.js";import"./_baseIteratee-yswP77C1.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-hdDrux36.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CGBaDnkV.js";import"./useSchema-q9HHvW8y.js";import"./index-3jFJPesw.js";import"./enums-BD6Gf4jI.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-UzDtS0gP.js";import"./uniq-BfgxidcQ.js";import"./forEach-UWyboym_.js";import"./Add-CxMy2Lai.js";import"./Grid-CDu8w-CH.js";import"./ListItem-DGHGKA8G.js";import"./listItemButtonClasses-Bn9ypA_r.js";import"./ListItemIcon-vKTIqRul.js";import"./MenuItem-ChUmjrmC.js";import"./ListItemText-DdX8XhoD.js";import"./ArrowUpward-XiZZaphW.js";import"./ContentCopy-ZVeBp0yt.js";import"./FormControlLabel-AsYqHmfp.js";import"./Checkbox-B1LsbIzZ.js";import"./SwitchBase-DBcCC2Ae.js";import"./FormGroup-BzV2Oe0k.js";import"./RadioGroup-CGxlf66p.js";import"./Radio-u0ArbEzc.js";import"./Slider-pW7sZXoo.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-c8z7MNMM.js";import"./DialogBase-ZmMylcay.js";import"./Close-Bm3BYI87.js";import"./HelpPopover-DpOHdoba.js";import"./MarkdownPopover-DUEIEIHd.js";import"./LightTooltip-B9cGyM6Q.js";import"./MarkdownSynapse-Bp46o5vr.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonTable-EsMLBsV_.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./JsonSchemaForm-DNXsgzUe.js";import"./GridLegacy-CKJ47nkU.js";import"./HelpTwoTone-DQJCKB9B.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C2zaaV_Y.js";import"./_createAggregator-Fjfo9JK0.js";import"./_baseMap-CAb0E05m.js";import"./DateTimePicker-D2wZ0SD5.js";import"./useMobilePicker-DaD6O4sS.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Chw6QwaX.js";import"./index-BLt8cigd.js";import"./Chip-CF5f4rXb.js";import"./Tabs-CfCo3Ws6.js";import"./KeyboardArrowRight-riO4yS9E.js";import"./Autocomplete-CYtlEtNG.js";import"./usePreviousProps-ZC0xOhlJ.js";import"./use-deep-compare-effect.esm-vu9Svgz2.js";import"./TextWidget-kjsspilt.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
