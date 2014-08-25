<div class="toc-container-inner">
  <h3>Use Cases</h3>

  <ul>
    <li ng-repeat="primaryPage in toc.pages">
      {{primaryPage.id}} - {{primaryPage.name}}

      <ul ng-show="primaryPage.children.length > 0">
        <li ng-repeat="secondaryPage in primaryPage.children">
          <a href="#" ng-href="#/{{secondaryPage.id}}">
            {{secondaryPage.id}} - {{secondaryPage.name}}
          </a>

          <ul ng-show="secondaryPage.children.length >0">
            <li ng-repeat="tertiaryPage in secondaryPage.children">
              <a href="#" ng-href="#/{{secondaryPage.id}}/{{tertiaryPage.id}}">
                {{tertiaryPage.id}} - {{tertiaryPage.name}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>