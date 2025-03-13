<template>
    <Layout :user="user">
        <!-- Content wrapper -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-datatable">
                    <div id="DataTables_Table_0_wrapper" class="dt-container dt-bootstrap5 dt-empty-footer">
                        <div class="row m-3 my-0 justify-content-between">
                            <div
                                class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto px-3 mt-0">
                                <div class="dt-search mb-0 mb-md-6"><input type="search" class="form-control ms-0"
                                        id="dt-search-0" placeholder="Search Category"
                                        aria-controls="DataTables_Table_0"><label for="dt-search-0"></label></div>
                            </div>
                            <div
                                class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto px-3 column-gap-2 mt-0 mb-md-0 mb-4">
                                <div class="dt-length"><select name="DataTables_Table_0_length"
                                        aria-controls="DataTables_Table_0" class="form-select" id="dt-length-0">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select><label for="dt-length-0"></label></div>
                                <div class="dt-buttons btn-group flex-wrap"><button class="btn add-new btn-primary"
                                        tabindex="0" aria-controls="DataTables_Table_0" type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasEcommerceCategoryList"><span><i
                                                class="icon-base bx bx-plus icon-sm me-0 me-sm-2"></i><span
                                                class="d-none d-sm-inline-block">Add Category</span></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="justify-content-between dt-layout-table border-top">
                            <div
                                class="d-md-flex justify-content-between align-items-center col-12 dt-layout-full col-md table-responsive">
                                <table class="datatables-category-list table dataTable dtr-column collapsed"
                                    id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info"
                                    style="width: 100%;">
                                    <colgroup>
                                        <col data-dt-column="0" style="width: 48.2344px;">
                                        <col data-dt-column="1" style="width: 58.2969px;">
                                        <col data-dt-column="2" style="width: 522.984px;">
                                        <col data-dt-column="3" style="width: 174.688px;">
                                        <col data-dt-column="4" style="width: 146.797px;">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th data-dt-column="0" class="control dt-orderable-none" rowspan="1"
                                                colspan="1" aria-label=""><span class="dt-column-title"></span><span
                                                    class="dt-column-order"></span></th>
                                            <th data-dt-column="1" rowspan="1" colspan="1"
                                                class="dt-select dt-orderable-none" aria-label=""><span
                                                    class="dt-column-title"></span><span
                                                    class="dt-column-order"></span><input class="form-check-input"
                                                    type="checkbox" aria-label="Select all rows"></th>
                                            <th data-dt-column="2" rowspan="1" colspan="1"
                                                class="dt-orderable-asc dt-orderable-desc dt-ordering-desc"
                                                aria-sort="descending"
                                                aria-label="Categories: Activate to remove sorting" tabindex="0"><span
                                                    class="dt-column-title" role="button">Categories</span><span
                                                    class="dt-column-order"></span></th>
                                            <th class="text-nowrap text-sm-end dt-orderable-asc dt-orderable-desc dt-type-numeric"
                                                data-dt-column="3" rowspan="1" colspan="1"
                                                aria-label="Total Products &amp;nbsp;: Activate to sort" tabindex="0">
                                                <span class="dt-column-title" role="button">Total Products
                                                    &nbsp;</span><span class="dt-column-order"></span></th>
                                            <th class="text-nowrap text-sm-end dt-orderable-none" data-dt-column="4"
                                                rowspan="1" colspan="1" aria-label="Total Earning"><span
                                                    class="dt-column-title">Total Earning</span><span
                                                    class="dt-column-order"></span></th>
                                            <th class="text-lg-center dt-orderable-none dtr-hidden" data-dt-column="5"
                                                rowspan="1" colspan="1" aria-label="Actions" style="display: none;">
                                                <span class="dt-column-title">Actions</span><span
                                                    class="dt-column-order"></span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../js/assets/img/ecommerce-images/product-16.png" alt="Product-8" class="rounded"></div> -->
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/1.jpg" alt="Product-8" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Travel</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of travel accessories from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">4186</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$7912.99</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/2.jpg" alt="Product-1" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Smart
                                                            Phone</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of smartphones from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">1947</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$99129</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/3.jpg" alt="Product-4" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Shoes</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Explore
                                                                the latest shoes from Top brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">4940</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$3612.98</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/4.jpg" alt="Product-10" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Jewellery</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of Jewellery from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">4186</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$7912.99</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/5.jpg" alt="Product-7" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Home Decor</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of home decor from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">9184</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$19120.45</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/6.jpg" alt="Product-11" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Grocery</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Get
                                                                fresh groceries delivered at your
                                                                doorstep</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">4186</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$7912.99</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/7.jpg" alt="Product-6" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Games</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Dive
                                                                into world of Virtual Reality with latest
                                                                games</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">5764</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$29129</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/8.jpg" alt="Product-2" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span
                                                            class="text-heading text-wrap fw-medium">Electronics</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of electronics from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">7283</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$2512.50</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/9.jpg" alt="Product-12" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Clothing</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of clothing from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">4186</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$7912.99</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="control" tabindex="0"></td>
                                            <td class="dt-select"><input aria-label="Select row"
                                                    class="form-check-input" type="checkbox"></td>
                                            <td class="sorting_1">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-wrapper me-3 rounded-2 bg-label-secondary">
                                                        <!-- <div class="avatar"><img src="../../../js/assets/img/elements/10.jpg" alt="Product-3" class="rounded"></div> -->
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <span class="text-heading text-wrap fw-medium">Clocks</span>
                                                        <span class="text-truncate mb-0 d-none d-sm-block"><small>Choose
                                                                from wide range of clocks from popular
                                                                brands</small></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="dt-type-numeric">
                                                <div class="text-sm-end">2954</div>
                                            </td>
                                            <td>
                                                <div class="mb-0 text-sm-end">$1612.34</div>
                                            </td>
                                            <td class="dtr-hidden" style="display: none;">
                                                <div class="d-flex align-items-sm-center justify-content-sm-center">
                                                    <button class="btn btn-icon"><i
                                                            class="icon-base bx bx-edit icon-md"></i></button>
                                                    <button class="btn btn-icon dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-end m-0">
                                                        <a href="#" class="dropdown-item">View</a>
                                                        <a href="#" class="dropdown-item">Suspend</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="row mx-3 justify-content-between">
                            <div
                                class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto px-3 mt-0">
                                <div class="dt-info" aria-live="polite" id="DataTables_Table_0_info" role="status">
                                    Showing 1 to 10 of 14 entries</div>
                            </div>
                            <div
                                class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto px-3 column-gap-2 mt-0 mb-md-0 mb-4">
                                <div class="dt-paging">
                                    <nav aria-label="pagination">
                                        <ul class="pagination">
                                            <li class="dt-paging-button page-item disabled"><button
                                                    class="page-link previous" role="link" type="button"
                                                    aria-controls="DataTables_Table_0" aria-disabled="true"
                                                    aria-label="Previous" data-dt-idx="previous" tabindex="-1"><i
                                                        class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-18px"></i></button>
                                            </li>
                                            <li class="dt-paging-button page-item active"><button class="page-link"
                                                    role="link" type="button" aria-controls="DataTables_Table_0"
                                                    aria-current="page" data-dt-idx="0">1</button></li>
                                            <li class="dt-paging-button page-item"><button class="page-link" role="link"
                                                    type="button" aria-controls="DataTables_Table_0"
                                                    data-dt-idx="1">2</button></li>
                                            <li class="dt-paging-button page-item"><button class="page-link next"
                                                    role="link" type="button" aria-controls="DataTables_Table_0"
                                                    aria-label="Next" data-dt-idx="next"><i
                                                        class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-18px"></i></button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content wrapper -->

        <!-- Modal -->
        <div class="offcanvas offcanvas-end show" tabindex="-1" id="offcanvasEcommerceCategoryList" aria-labelledby="offcanvasEcommerceCategoryListLabel" aria-modal="true" role="dialog">
            <!-- Offcanvas Header -->
            <div class="offcanvas-header py-6">
                <h5 id="offcanvasEcommerceCategoryListLabel" class="offcanvas-title">Add Category</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <!-- Offcanvas Body -->
            <div class="offcanvas-body border-top">
                <form class="pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="eCommerceCategoryListForm" onsubmit="return true" novalidate="novalidate">
                    <!-- Title -->
                    <div class="mb-6 form-control-validation fv-plugins-icon-container">
                        <label class="form-label" for="ecommerce-category-title">Title</label>
                        <input type="text" class="form-control" id="ecommerce-category-title" placeholder="Enter category title" name="categoryTitle" aria-label="category title">
                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                    </div>
                    <!-- Slug -->
                    <div class="mb-6 form-control-validation fv-plugins-icon-container">
                        <label class="form-label" for="ecommerce-category-slug">Slug</label>
                        <input type="text" id="ecommerce-category-slug" class="form-control" placeholder="Enter slug" aria-label="slug" name="slug">
                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                    </div>
                    <!-- Image -->
                    <div class="mb-6">
                        <label class="form-label" for="ecommerce-category-image">Attachment</label>
                        <input class="form-control" type="file" id="ecommerce-category-image">
                    </div>
                    <!-- Parent category -->
                    <div class="mb-6 ecommerce-select2-dropdown">
                        <label class="form-label" for="ecommerce-category-parent-category">Parent category</label>
                        <div class="position-relative">
                            <select id="ecommerce-category-parent-category" class="select2 form-select select2-hidden-accessible" data-placeholder="Select parent category" data-select2-id="ecommerce-category-parent-category" tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="2">Select parent Category</option>
                                <option value="Household">Household</option>
                                <option value="Management">Management</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Office">Office</option>
                                <option value="Automotive">Automotive</option>
                            </select>
                            <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 337px;">
                                <span class="selection">
                                    <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ecommerce-category-parent-category-container">
                                        <span class="select2-selection__rendered" id="select2-ecommerce-category-parent-category-container" role="textbox" aria-readonly="true">
                                            <span class="select2-selection__placeholder">Select parent category</span>
                                        </span>
                                        <span class="select2-selection__arrow" role="presentation">
                                            <b role="presentation"></b>
                                        </span>
                                    </span>
                                </span>
                                <span class="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="mb-6">
                        <label class="form-label">Description</label>
                        <!-- <div class="form-control p-0 py-1">
                            <div class="comment-editor border-0 ql-container ql-snow" id="ecommerce-category-description">
                                <div class="ql-editor ql-blank" contenteditable="true" data-placeholder="Write a Comment...">
                                    <p><br></p>
                                </div>
                                <div class="ql-tooltip ql-hidden">
                                    <a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>
                                    <input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">
                                    <a class="ql-action"></a>
                                    <a class="ql-remove"></a>
                                </div>
                            </div>
                            <div class="comment-toolbar border-0 rounded ql-toolbar ql-snow">
                                <div class="d-flex justify-content-end">
                                    <span class="ql-formats me-0">
                                        <button class="ql-bold" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
                                                <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
                                            </svg>
                                        </button>
                                        <button class="ql-italic" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                                <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                            </svg>
                                        </button>
                                        <button class="ql-underline" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path>
                                                <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>
                                            </svg>
                                        </button>
                                        <button class="ql-list" value="ordered" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>
                                                <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
                                                <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
                                                <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
                                                <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
                                            </svg>
                                        </button>
                                        <button class="ql-list" value="bullet" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>
                                            </svg>
                                        </button>
                                        <button class="ql-link" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>
                                                <path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path>
                                                <path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path>
                                            </svg>
                                        </button>
                                        <button class="ql-image" type="button">
                                            <svg viewBox="0 0 18 18">
                                                <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
                                                <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
                                                <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div> -->
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <!-- Status -->
                    <div class="mb-6 ecommerce-select2-dropdown">
                        <label class="form-label">Select category status</label>
                        <div class="position-relative">
                            <select id="ecommerce-category-status" class="select2 form-select select2-hidden-accessible" data-placeholder="Select category status" data-select2-id="ecommerce-category-status" tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="4">Select category status</option>
                                <option value="Scheduled">Scheduled</option>
                                <option value="Publish">Publish</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 337px;">
                                <span class="selection">
                                    <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ecommerce-category-status-container">
                                        <span class="select2-selection__rendered" id="select2-ecommerce-category-status-container" role="textbox" aria-readonly="true">
                                            <span class="select2-selection__placeholder">Select category status</span>
                                        </span>
                                        <span class="select2-selection__arrow" role="presentation">
                                            <b role="presentation"></b>
                                        </span>
                                    </span>
                                </span>
                                <span class="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                    <!-- Submit and reset -->
                    <div class="mb-6">
                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Add</button>
                        <button type="reset" class="btn btn-label-danger" data-bs-dismiss="offcanvas">Discard</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../Components/Layout/Layout.vue";

export default {
    components: {
        Layout,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
