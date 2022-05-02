import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserResponse } from '../../models/user-model';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: UserResponse[] = [
  {
    id: 0,
    name: 'string',
    email: 'string',
    mobile: 'string',
    cpf: 'string',
    gender: 'string',
    birthDate: 'string',
    skills: [],
    certification: 'string'
  },
];


/**
 * Data source for the  view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BrqDataSource extends DataSource<UserResponse> {
  dataSource: UserResponse[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  dataFilter = new MatTableDataSource(this.dataSource);
  constructor() {
    super();
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserResponse[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.dataSource), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.dataSource]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
  *  Called when the table is being destroyed. Use this function, to clean up
  * any open connections or free any held resources that were set up during connect.
  */
  disconnect(): void { }


  /**
 * Paginate the data (client-side). If you're using server-side pagination,
 * this would be replaced by requesting the appropriate data from the server.
 */
  private getPagedData(data: UserResponse[]): UserResponse[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UserResponse[]): UserResponse[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'date': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
