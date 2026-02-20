import{jG as p}from"./iframe-CkxBXYUS.js";import{S as a}from"./SchemaDrivenAnnotationEditor-HlKrgld9.js";import"./index-Chi_LkuB.js";import"./useEntity-D0Vta4xG.js";import"./pickBy-CksjIvz6.js";import"./isString-BRPRh22a.js";import"./_baseIteratee-D3hgKa38.js";import"./useQueries-Yp2j9f7r.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./useInfiniteQuery-GEnPT25t.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FPFa4g8_.js";import"./useSchema-yidcttCr.js";import"./index-BdyFgc40.js";import"./enums-l_3fZ-c3.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BOfPgxL4.js";import"./uniq-xfdkBigH.js";import"./forEach-CWOCpBhE.js";import"./Add-BzsUgyiJ.js";import"./Grid-DspLooeH.js";import"./ListItem-1i6bgoDx.js";import"./listItemButtonClasses-Do4tbNvZ.js";import"./ListItemIcon-Kzmoo2VV.js";import"./MenuItem-CEfDuclk.js";import"./ListItemText-Dw6r1FRM.js";import"./ArrowUpward-D8OrvKqH.js";import"./ContentCopy-BTyaGP3s.js";import"./FormControlLabel-DRB2gJy9.js";import"./Checkbox-BdBxDy6O.js";import"./SwitchBase-fsEWQiIL.js";import"./FormGroup-Bk2Yq7SW.js";import"./RadioGroup-8OwxY3Wa.js";import"./Radio-CNEljpXE.js";import"./Slider-s7kbylFd.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CtJfMeS4.js";import"./DialogBase-A-L2CAQ2.js";import"./Close-CMCH1D24.js";import"./HelpPopover-8rjafscZ.js";import"./MarkdownPopover-3C7AALW8.js";import"./LightTooltip-iqHVnLEB.js";import"./MarkdownSynapse-Cl6WuhRF.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonTable-BxoX6BC7.js";import"./SkeletonParagraph-DYUWrGET.js";import"./JsonSchemaForm-BjfiMCQn.js";import"./GridLegacy-DWVl_W8h.js";import"./HelpTwoTone-CeX0v0h9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-orPiS9Mg.js";import"./_createAggregator-G8fEk1pX.js";import"./_baseMap-BSeajlG7.js";import"./DateTimePicker-DfFQQPZh.js";import"./useMobilePicker-BO0y2TqK.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DGo24dSd.js";import"./index-SFhbXU88.js";import"./Chip-CZ1spSeI.js";import"./Tabs-BrgjxPf1.js";import"./KeyboardArrowRight-DfdcDd9Q.js";import"./Autocomplete-CiVXsZx4.js";import"./usePreviousProps-CGwlHOmp.js";import"./use-deep-compare-effect.esm-CITT_kVX.js";import"./TextWidget-DG4D_7_8.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
