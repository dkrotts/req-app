<div class="requirement-container" scope-element="requirementContainer">

  <div class="requirement-meta">
    <a href="#" class="requirement-anchor" title="Copy link address">
      <i class="fa fa-link"></i>
    </a>

    <a href="#" class="requirement-twisty" title="Collapse section" scope-element="twisty">
      <i class="fa fa-plus-square-o" ng-hide="isOpen"></i>
      <i class="fa fa-minus-square-o" ng-show="isOpen"></i>
    </a>

    <h4 class="requirement-id">{{requirement.id}} - {{requirement.title}}</h4>
  </div>

  <div class="requirement-body" ng-show="isOpen">
    {{requirement.description}}
  </div>
</div>